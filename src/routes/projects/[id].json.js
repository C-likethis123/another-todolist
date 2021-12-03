import {connectToDatabase} from "$lib/db";
import Project from "$lib/Project";

export async function get(request) {
  try {
    await connectToDatabase();
    const {id} = request.params;
    const projects = await Project.find({});
    return {
      status: 200,
      body: {
        projects,
      }
    };
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      // error: err,
    }
  }
}