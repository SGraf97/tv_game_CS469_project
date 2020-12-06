import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import {TaskModel} from '../../../models/task.model';
import {TwitModel} from "@app/models";


export  class TwitsController {


  public applyRoutes(): Router {

    const router = Router();
    router
      .post('/add', this.add)
      .get('/getAll', this.getAll)
      .delete('/all' , this.wipedb);
    return router;
  }

  public async add(req: Request, res: Response) {
    // basic creating of user
    TwitModel.insertMany([
        {
          userTag: req.params.userTag,
          username: req.params.username,
          userProfileImage: req.params.userProfileImage,
          likes: req.params.likes,
          retweets: req.params.retweets,
          whenCreated: req.params.whenCreated, // nomizw
          twit: req.params.twit,
        }
      ],
      function(err , result){
        if(err){
          logger.info('error adding twit');
          res.send(err);
        }else{
          logger.info('added twit');
          res.send(result);
        }
      });
  }

  public getAll(req:Request , res: Response)
  {
    TwitModel.find({} , function (err , users){
      let userMap: any[] = [];
      users.forEach(function (twit){
        userMap.push(twit);
        // res.send(user);
      });
      res.send(userMap);
    });
  }

  public wipedb(req: Request , res: Response){
    TwitModel.remove({} , ()=>{
      res.send('deleted');
    });

  }
}
