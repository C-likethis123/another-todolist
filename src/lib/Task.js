import {model, Schema} from 'mongoose';

export const Task = new Schema({
  name: {type: String, required: true},
  description: String,
  startDate: {type: Date},
  endDate: {type: Date},
});

export default model('Task', Task);