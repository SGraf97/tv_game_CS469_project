import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';
import {IUSer, UserModel} from './user.model';
import {IMessage} from "@app/models/message.model";

// ------------------------------------------
// Interface declaration
export interface Iquestion extends Document {
  question: String;
  winnerID:String;
  options : String[];
}

// ------------------------------------------
// Schema definition
const QuestrionSchema = new Schema(
  {
    question: {type : String, required : true},
    options : [{type: String , default : null}],
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const QuestionModel: Model<Iquestion> = model<Iquestion>(
  'Question', QuestrionSchema
);
