import {model, Schema} from 'mongoose';
import {Task} from "./TaskList";

export const TaskList = new Schema({
  name: {type: String, required: true},
  tasks: {type: [ Task ], default: []},
});

export default model('TaskList', TaskList);