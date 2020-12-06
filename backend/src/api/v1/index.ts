import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import {UserController} from "@app/api/v1/users/user.controller";
import {TwitsController} from "@app/api/v1/twits/twits.controller";
import {ModelsController} from "@app/api/v1/models/models.controller";
import {MessagesController} from "@app/api/v1/messages/messages.controller";

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
    '/users',
    new UserController().applyRoutes()
  )

  .use(
    '/twitter',
    new TwitsController().applyRoutes()
  )

  .use(
    '/models',
    new ModelsController().applyRoutes()
  )

  .use(
    '/messages',
    new MessagesController().applyRoutes()
  );

export { apiV1Router };

