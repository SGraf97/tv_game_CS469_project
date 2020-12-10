import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface ICapture extends Document {
  user: string;
  captureURL: string;
}

// ------------------------------------------
// Schema definition
const captureSchema = new Schema(
  {
    user: { type: String, required: true },
    captureURL: { type: String, required: false },
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const CaptureModel: Model<ICapture> = model<ICapture>(
  'Capture', captureSchema, 'Capture'
);
