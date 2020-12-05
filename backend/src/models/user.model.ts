import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IUSer extends Document {
  username: string;
  password: string;
  color: string;
  photoProfile: string;
  xp: number;
  level: number;
}

// ------------------------------------------
// Schema definition
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    color: {type: String , required : false},
    photoProfile: {type: String  , required : false},
    xp: {type: Number , required : false},
    level : {type : Number , required : true}
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const UserModel: Model<IUSer> = model<IUSer>(
  'User', userSchema
);
