// import {connectToDatabase} from "$lib/db";
// import Project from "$lib/Project";

// export async function get(request) {
//   try {
//     await connectToDatabase();
//     const projects = await Project.find({});
//     return {
//       status: 200,
//       body: {
//         projects,
//       }
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
  _id: 0,
  name: 'Leetcode Yeetcode',
  taskCount: 10,
  taskLists: [ {
    name: 'TODO',
    tasks: [ {text: 'todo'} ]
  } ]
} ];
export async function get(request) {
  try {
    return {
      status: 200,
      body: data,
    };
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      // error: err,
    }
  }
}

// export async function post(request) {
//   try {
//     await connectToDatabase();
//     const {name} = JSON.parse(request.body);
//     const project = await Project.create({name});
//     return {
//       status: 200,
//       body: {
//         project,
//       }
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       status: 400,
//     }
//   }
// }