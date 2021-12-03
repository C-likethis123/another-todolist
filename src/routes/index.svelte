<script context="module">
export async function load({fetch}) {
    const res = await fetch('/todos');
    const { todos } = await res.json();
      return {
      props: {
        todos,
      }
    };
  }
</script>

<script>
export let todos;
let text;

async function addTodo() {
  try {
    const todo = {
      text,
      completed: false,
      id: Date.now(),
    }

    await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });
    todos.push(todo);
    todos = todos;
  } catch (err) {
    alert('An error occured');
  } finally {
    text = '';
  }
}

async function completeTodo(todo) {
  try {
    const updateTodo = {
      ...todo,
      completed: !todo.completed,
    };

    await fetch('/todos', {
      method: 'PUT',
      body: JSON.stringify(updateTodo)
    });
    todos = todos.map(item => item.id === Number(updateTodo.id) ? updateTodo : item);
  } catch (err) {
    alert('There was an error');
  }
}

async function deleteTodo(id) {
  try{
  await fetch('/todos', {
    method: 'DELETE',
    body: JSON.stringify({id}),
  });
  todos = todos.filter(item => item.id !== id);
  } catch(err) {
    alert('There was an error');
  }
}
</script>

  <h1>My Todos</h1>
  <input type="text" bind:value={text} />
  <button on:click={addTodo}>Add Todo</button>

  <br/>
  <ul>
    {#each todos as todo}
      <li>
        <input type="checkbox" bind:checked={todo.completed} on:change={() => completeTodo(todo)}/>
        <span>{todo.text}</span>
        <button on:click={() => deleteTodo(todo.id)}>x</button>
      </li>
    {/each}
  </ul>