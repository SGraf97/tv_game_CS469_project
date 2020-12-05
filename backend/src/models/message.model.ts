import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';
import {User} from "../../../frontend/src/app/model/user";

// ------------------------------------------
// Interface declaration
export interface IMessage extends Document {
  user: User;
  messageText: string;
}

// ------------------------------------------
// Schema definition
const MessageSchema = new Schema(
  {
    user: {type: User , required : true},
    messageText: {type: String  , required : true},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const MessageModel: Model<IMessage> = model<IMessage>(
  'Message', MessageSchema
);
