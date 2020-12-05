import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import {TaskModel} from '../../../models/task.model';
import {UserModel} from "@app/models";


export  class UserController {


  public applyRoutes(): Router {

    const router = Router();
    router
      .post('/add', this.add)
      .get('/get', this.getUser)
      .delete('/all' , this.wipedb);
    return router;
  }

  public async add(req: Request, res: Response) {
    // basic createing of user
    UserModel.insertMany([
        {username : 'test1' ,  password : 'test' , level: 0},
        {username : 'test1' ,  password : 'test' , level: 0},
        {username : 'test3' ,  password : 'test' , level: 0},
        {username : 'test4' ,  password : 'test' , level: 0},
      ],
      function(err , result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
      });

    logger.info('user Added with username ' + req.params.username);
    // res.send();
  }

  public getUser(req:Request , res: Response)
  {
    UserModel.find({} , function (err , users){
      let userMap: any[] = [];
      users.forEach(function (user){
        userMap.push(user);
        // res.send(user);
      });
      res.send(userMap);
    });
  }

  public wipedb(req: Request , res: Response){
    UserModel.remove({} , ()=>{
      res.send('deleted');
    } );

  }
}
