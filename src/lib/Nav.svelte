<script>
  import { onMount } from 'svelte';
  import Submenu from "$lib/Submenu.svelte";
  let projects = [];
  onMount(async function() {
    const res = await fetch('/projects');
    const data = await res.json();
    projects = data.projects;
  });
</script>
<nav>
    <Submenu name="Projects">
      <ul>
        {#each projects as project}
          <li>
            <a href={`projects/${project.id}`}>{project.name}</a>
            <span>{project.taskCount}</span>
          </li>
        {/each}
      </ul>
  </Submenu>
</nav>
