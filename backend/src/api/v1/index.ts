import * as express from 'express';
import { ResourceController } from '../shared';
import {IMessage, IModela, ITask, IUSer, MessageModel, ModelaModel, TaskModel, UserModel} from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import {UserController} from '@app/api/v1/users/user.controller';
import {MessageController} from "@app/api/v1/messages/message.controller";
import {ITwit, TwitModel} from "@app/models/twit.model";

const apiV1Router = express.Router();


apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )

  .use(
    '/user',
    new ResourceController<IUSer>(UserModel).applyRoutes()
  )
  .use(
    '/message',
   new ResourceController<IMessage>(MessageModel).applyRoutes()
  )

  .use(
    '/twitter',
    new ResourceController<ITwit>(TwitModel).applyRoutes()
  )

  .use(
    '/models',
    new ResourceController<IModela>(ModelaModel).applyRoutes()
  );

export { apiV1Router };

