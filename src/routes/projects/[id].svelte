<script context="module">
export async function load({fetch, page}) {
  try{
    const res = await fetch(`/projects/${page.params.id}.json`);
    const data = await res.json();
    return {
      props: {
        project: data,
      }
    }
  }catch(err) {
    console.log(err)
    return {
      props: {
        project: []
      }
    }
  }
}
</script>

<script>
export let project;
let newTaskList = '';
async function addTaskList(e) {
  if (e.charCode === 13) {
    const res = await fetch(`/taskList`, {
      method: 'POST',
      body: JSON.stringify({name: newTaskList}),
    });
    const {taskList} = await res.json();
    project.taskLists = [...(project.taskLists), taskList]; 
    newTaskList = '';
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

h2 {
  font-family: "Inter", "san-serif";
}

input {
  outline: unset;
}
</style>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<h2 class="text-3xl">{project.name}</h2>
<br />
{#each project.taskLists as taskList}
{/each}

<label>Add Task List</label>
<input bind:value={newTaskList} on:keypress={addTaskList}/>