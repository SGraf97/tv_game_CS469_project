import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import {TaskModel} from '../../../models/task.model';
import {Modell} from "@app/models";
import {Model} from "mongoose";


export  class ModelsController {


  public applyRoutes(): Router {

    const router = Router();
    router
      .post('/init' , this.init)
      .post('/add', this.addNewUser)
      .get('/getall', this.getAll)
      .delete('/all' , this.wipedb);
    return router;
  }


  public init(req: Request , res : Response){
    Modell.insertMany([
      {name : 'Adreas' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Chryssa' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Aimiliano' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Eirini' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Panagiotis' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Mariagapi' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Kostantinos' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Alexandra' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Edouard' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Irida' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Sifis' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Marinela' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Hraklis' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Xenia' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Dimosthenis' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Lia' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Emmanouel' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Paraskevi' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Panagiotis P' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
      {name : 'Rasel' , age : 19 , height:1.90 , points : 0 , description:'none' , fullname:'makari na 3era'},
    ] , (err , result)=>{
      if(err){
        logger.info('error initing models');
        res.send(err);
      }else{
        logger.info('init models done');
        res.send(result);
      }
    });
  }

  public async addNewUser(req: Request, res: Response) {
    // basic createing of user
    Modell.insertMany([
        {
          name : req.params.name,
          age : req.params.age,
          height : req.params.height,
          points : req.params.points,
          description : req.params.description,
          fullname : req.params.fullname,
        }
      ],
      function(err , result){
        if(err){
          logger.info('error adding model');
          res.send(err);
        }else{
          logger.info('added model');
          res.send(result);
        }
      });
  }

  public getAll(req:Request , res: Response)
  {
    Modell.find({} , function (err , users){
      let userMap: any[] = [];
      users.forEach(function (model){
        userMap.push(model);
        // res.send(user);
      });
      res.send(userMap);
    });
  }

  public wipedb(req: Request , res: Response){
    Modell.remove({} , ()=>{
      res.send('deleted');
    } );

  }
}
