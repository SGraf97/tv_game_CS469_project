import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';
import {IUSer, UserModel} from './user.model';

// ------------------------------------------
// Interface declaration
export interface IMessage extends Document {
  user: IUSer;
  messageText: string;
  timestamp: Date;
}

// ------------------------------------------
// Schema definition
const MessageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' , required: true},
    messageText: {type: String  , required : true},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const MessageModel: Model<IMessage> = model<IMessage>(
  'Message', MessageSchema
);
