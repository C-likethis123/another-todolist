<script>
  import { onMount } from 'svelte';
  import Submenu from "$lib/Submenu.svelte";
  let projects = [];
  onMount(async function() {
    try{
      const res = await fetch('/projects');
      const data = await res.json();
      projects = data;
    } catch(err) {
      projects = [];
    }
  });

  let newProject = '';
  let inputVisible = false;

  async function addProject(e) {
    if (e.charCode === 13) {
      try {
        const res = await fetch(`/projects`, {
          method: 'POST',
          body: JSON.stringify({
            name: newProject,
          }),
        });
        const {project} = await res.json();
        projects = [...projects, project];
        newProject = '';
      } catch (err) {
        alert("The project cannot be added");
      }
    }   
}

  function showInput() {
    document.querySelector("#addProject").focus();
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

h2 {
  font-family: "Inter", "san-serif";
}
</style>

<nav>
    <Submenu name="Projects">
      <div class="flex text-4xl">
      <h2>Projects</h2>
      <button on:click={showInput} class="hover:bg-gray-300 w-4 h-4.5 rounded">+</button>
      </div>
      <ul>
        {#each projects as project}
          <li class="hover:bg-gray-300">
            <a href={`http://${import.meta.env.VITE_HOST_NAME}/projects/${project._id}`}>{project.name}</a>
            <span>{project.taskCount}</span>
          </li>
        {/each}
        <input id="addProject" bind:value={newProject} on:keypress={addProject}/>
      </ul>
  </Submenu>
</nav>
