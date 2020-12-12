import { Socket } from 'dgram';
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
  socket: string;
  isLoggedIn: boolean;

}

// ------------------------------------------
// Schema definition
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    color: {type: String , required : true},
    photoProfile: {type: String, required : false},
    xp: {type: Number, required : false},
    level : {type : Number, required : true},
    socket: {type: String, default : null, required: false},
    isLoggedIn: {type:Boolean , default: false}

  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const UserModel: Model<IUSer> = model<IUSer>(
  'User', userSchema
);

