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

  function addProject(e) {
    if (e.charCode === 13) {
      alert(newProject);
      newProject = '';
    }    
  }

  function showInput() {
    document.querySelector("#addProject").focus();
  }
</script>

<nav>
    <Submenu name="Projects">
      <div class="flex">
      <h2>Projects</h2>
      <button on:click={showInput}>+</button>
      </div>
      <ul>
        {#each projects as project}
          <li>
            <a href={`projects/${project.id}`}>{project.name}</a>
            <span>{project.taskCount}</span>
          </li>
        {/each}
        <input id="addProject" bind:value={newProject} on:keypress={addProject}/>
      </ul>
  </Submenu>
</nav>
