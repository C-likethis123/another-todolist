import {model, Schema} from 'mongoose';
import {TaskList} from "./TaskList";

const Project = new Schema({
  name: {type: String, required: true},
  taskCount: {type: Number, default: 0},
  taskLists: {type: [ TaskList ], default: []},
});

export default model('Project', Project);