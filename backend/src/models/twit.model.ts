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
    userTag: {type:String , required : false},
    username:{type: String,  required : true},
    userProfileImage:{type: String,  required : false},
    likes: {type:Number,  required : false},
    retweets:{type: Number,  required : false},
    whenCreated:{type: String,  required : false}, // nomizw
    twittedFrom:{type: String,  required : false},
    twit: {type:String,  required : true},
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TwitModel: Model<ITwit> = model<ITwit>(
  'Twit', TwitSchema
);
