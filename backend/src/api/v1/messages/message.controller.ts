import {NextFunction, Request, Response, Router} from 'express';
import {IMessage, MessageModel, UserModel} from '@app/models';



export class MessageController{
  //
  // public applyRoutes(): Router {
  //
  //   const router = Router();
  //   router
  //     .put('/message' , this.addMessage)
  //     .get('/message' , this.getMessages);
  //   return router;
  // }


  async addMessage(req:Request , res : Response , next?:NextFunction){
      try {
        // res.send('eka');
        const resourse =  await MessageModel.create({
          user: req.query.id,
          messageText: req.query.message
        });
        return res.status(200).send('OLA KALA ');
      } catch (e) {
        res.send('kati pige strava' + e);
        next(e);
      }
  }


  public getMessages(req:Request , res:Response){
    return async (req:Request ,  res:Response , next?:NextFunction) =>{
      try{
        let resources : any ;
        resources = await MessageModel.find({})
          // .populate()
          .exec();
        return res.status(200).json(resources);
      }catch (e){
        next(e);
      }
    }
  }
}
