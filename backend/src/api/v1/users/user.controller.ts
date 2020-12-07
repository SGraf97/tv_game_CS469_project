import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { UserModel } from '@app/models';


export class UserController {


  public applyRoutes(): Router {

    const router = Router();
    router
      .get('/login', this.login)
      .post('/user', this.addNewUser)
      .get('/users/:username', this.getUser)
      .get('/users', this.getAllUsers)
      .put('/users/:username', this.updateUserInfo)
      .delete('/users', this.wipedb);
    return router;
  }

  public async addNewUser(req: Request, res: Response) {
    UserModel.find({ username: req.query.username }, (err, user) => {
      if (user.length === 0) {
        UserModel.create(
          {
            username: req.query.username,
            password: req.query.password,
            color: req.query.color,
            level: 0,
            xp: 0,
            service: 'DIContainer.get(SocketsService)'
          }, (err: any) => {
            if (err) {
              res.send(err);
            } else {
              res.send('new user created');
            }
          });
      } else {
        res.send('Invalid username');
      }
    });
  }

  public getUser(req: Request, res: Response) {
    UserModel.find({ username: req.params.username }, (err, users) => {
      const requestedUser = users[0];
      if(users[0]){
        res.send(requestedUser);
      } else {
        res.send('no such user is registered');
      }
    });
  }

  public getAllUsers(req: Request, res: Response) {
    UserModel.find({}, (err, users) => {
      const allUsers: any[] = [];
      users.forEach(user => {
        allUsers.push(user);
      });
      res.json(allUsers);
    });
  }

  public updateUserInfo(req: Request, res: Response) {
    UserModel.updateOne(
      { username: req.params.username },
      { xp: req.query.xp, level: req.query.level, color: req.query.color },
      (err, users) => {
        const requestedUser = users;
      if(users){
        UserModel.find({ username: req.params.username }, (err, users) => {
          res.send(users[0]);
        });
      } else {
        res.send('no such user is registered');
      }
    });
  }

  public login(req: Request, res: Response) {
    UserModel.find({ username: req.query.username, password: req.query.password }, (err, users) => {
      const requestedUser = users[0];
      if(users[0]){
        res.send(requestedUser);
      } else {
        res.send('no such user is registered');
      }
    });
  }

  public wipedb(req: Request, res: Response) {
    UserModel.remove({}, () => {
      res.send('deleted');
    });

  }
}
