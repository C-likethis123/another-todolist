import fs from 'fs/promises';
import path from 'path';

const currentDirectory = process.cwd();
const DB_URL = path.join(currentDirectory, 'static', '/data/todos.json');
export async function get(request) {
  const completed = request.query.get('completed') === 'true';
  try {
    let filteredTodos;
    const storedTodos = await fs.readFile(DB_URL);
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      filteredTodos = parsedTodos.filter(item => item.completed === completed);
    } else {
      filteredTodos = [];
    }
    return {
      status: 200,
      body: {
        todos: filteredTodos,
      }
    }

  } catch (err) {
    return {
      status: 400,
      body: {
        error: err,
      }
    };
  }
}


export async function post(request) {
  try {
    const storedTodos = await fs.readFile(DB_URL);
    if (storedTodos) {
      console.log('in stored todos')
      const parsedTodos = JSON.parse(storedTodos);
      console.log(parsedTodos);
      const newTodo = JSON.parse(request.body);
      parsedTodos.push(newTodo);
      await fs.writeFile(DB_URL, JSON.stringify(parsedTodos));
      return {
        status: 200,
      }
    }
  } catch (err) {
    return {
      status: 400,
      error: err,
    }
  }

}

export async function put(request) {
  try {
    const storedTodos = await fs.readFile(DB_URL);
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      const newTodo = JSON.parse(request.body);
      const newTodos = parsedTodos.map(item => item.id === Number(newTodo.id) ? newTodo : item);
      await fs.writeFile(DB_URL, JSON.stringify(newTodos));
      return {
        status: 200,
      };
    }
  } catch (err) {
    return {
      status: 400,
      error: err,
    }
  }
}

export async function del(request) {
  try {
    const storedTodos = await fs.readFile(DB_URL);
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      const {id} = JSON.parse(request.body);
      const newTodos = parsedTodos.filter(item => item.id !== id);
      await fs.writeFile(DB_URL, JSON.stringify(newTodos));
      return {
        status: 200,
      }
    }
  } catch (err) {
    console.log(err)
    return {
      status: 400,
    }
  }
}

