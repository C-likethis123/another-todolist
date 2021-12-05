<script context="module">
  export async function load({ fetch, page }) {
    try {
      const res = await fetch(`/projects/${page.params.id}.json`);
      const data = await res.json();
      return {
        props: {
          project: data,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        props: {
          project: {
            taskLists: [],
          },
        },
      };
    }
  }
</script>

<script>
  import TaskListDisplay from "../../components/TaskListDisplay.svelte";

  export let project;
  let newTaskList = "";
  let showInput = false;

  async function addTaskList(e) {
    if (e.charCode === 13) {
      // const res = await fetch(`/taskList`, {
      //   method: 'POST',
      //   body: JSON.stringify({name: newTaskList}),
      // });
      // const {taskList} = await res.json();
      project.taskLists = [...project.taskLists, { name: newTaskList }];
      newTaskList = "";
    }
  }

  function showTaskList() {
    showInput = !showInput;
    newTaskList = "";
  }
</script>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<h2 class="text-3xl">{project.name}</h2>
<br />
{#each project.taskLists as taskList}
  <TaskListDisplay name={taskList.name} />
{/each}

{#if showInput}
  <input
    id="addTaskList"
    class="border-2 border-solid rounded p-2"
    bind:value={newTaskList}
    on:keypress={addTaskList}
    placeholder="Name of new task list"
  />
  <button on:click={showTaskList}>Cancel</button>
{:else}
  <button
    class="rounded border-solid hover:bg-gray-300 p-2"
    on:click={showTaskList}>Add Task List</button
  >
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");

  h2 {
    font-family: "Inter", "san-serif";
  }

  input {
    outline: unset;
  }
</style>
