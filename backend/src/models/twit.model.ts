import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface ITwit extends Document {
  userTag: string;
  username: string;
  userProfileImage: string;
  likes: number;
  retweets: number;
  whenCreated: string; // nomizw
  twittedFrom: string;
  twit: string;
}

// ------------------------------------------
// Schema definition
const TwitSchema = new Schema(
  {
    userTag: {type:String },
    username:{type: String },
    userProfileImage:{type: String},
    likes: {type:Number },
    retweets:{type: Number},
    whenCreated:{type: String}, // nomizw
    twittedFrom:{type: String},
    twit: {type:String},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TwitModel: Model<ITwit> = model<ITwit>(
  'Twit', TwitSchema
);
