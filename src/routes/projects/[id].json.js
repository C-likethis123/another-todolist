import {connectToDatabase} from "$lib/db";
import Project from "$lib/Project";

// export async function get(request) {
//   try {
//     await connectToDatabase();
//     const {id} = request.params;
//     console.log(id);
//     const projects = await Project.findOne({_id: id});
//     return {
//       status: 200,
//       body: projects,
//     };
//   } catch (err) {
//     console.log(err)
//     return {
//       status: 400,
//       // error: err,
//     }
//   }
// }

// temporary mock function
const data = [ {
  _id: "0",
  name: 'Leetcode Yeetcode',
  taskCount: 10,
  taskLists: [ {
    name: 'TODO',
    tasks: [{text: 'todo'}]
  }]
}]
export async function get(request) {
  try {
    const {id} = request.params;
    console.log(request)
    const projects = data.find(item => item._id === id);
    console.log(projects);
    return {
      status: 200,
      body: projects,
    };
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      // error: err,
    }
  }
}