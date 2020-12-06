import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import {MessageModel, UserModel} from "@app/models";



export  class MessagesController {


  public applyRoutes(): Router {

    const router = Router();
    router
      .post('/add', this.add)
      .get('/getall', this.getAll)
      .delete('/all' , this.wipedb);
    return router;
  }

  public async add(req: Request, res: Response) {
    // basic createing of user
    MessageModel.insertMany([
        {
          user : UserModel.findOne({username:req.params.username}).exec(),
          message:req.params.message,
        }
      ],
      function(err , result){
        if(err){
          logger.info('error adding message');
          res.send(err);
        }else{
          logger.info('added message');
          res.send(result);
        }
      });
  }

  public getAll(req:Request , res: Response)
  {
    MessageModel.find({} , function (err , messages){
      let MessageMap: any[] = [];
      messages.forEach(function (message){
        MessageMap.push(message);
        // res.send(user);
      });
      res.send(MessageMap);
    });
  }

  public wipedb(req: Request , res: Response){
    MessageModel.remove({} , ()=>{
      res.send('deleted');
    } );

  }
}
