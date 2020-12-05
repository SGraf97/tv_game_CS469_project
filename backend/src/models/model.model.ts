import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IModell extends Document {
  name: string;
  age: number;
  height: number;
  points: number;
  description : string;
  fullname:string;
}

// ------------------------------------------
// Schema definition
const ModellSchema = new Schema(
  {
    name: {type : String  , required : true},
    age:{type : Number  , required : true},
    height: {type : Number  , required : true},
    points: {type : Number  , required : true},
    description : {type : String  , required : true},
    fullname:{type : String  , required : true},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const Modell: Model<IModell> = model<IModell>(
  'Model', ModellSchema
);
