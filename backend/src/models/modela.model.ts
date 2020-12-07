import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IModela extends Document {
  name: string;
  age: number;
  height: number;
  points: number;
  description : string;
  fullname:string;
}

// ------------------------------------------
// Schema definition
const ModelaSchema = new Schema(
  {
    name: {type: String},
    age:{type: Number , default : 0},
    height:{type: Number , default : 0},
    points: {type:Number , default : 0},
    description :{type: String , default : 'neos wraios/nea wraia'},
    fullname:{type:String},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const ModelaModel: Model<IModela> = model<IModela>(
  'Modela', ModelaSchema,
);
