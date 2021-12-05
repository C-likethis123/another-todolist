<script>
export let name;
let tasks = [];

let isVisible = false;

function toggleAddTask() {
  isVisible = !isVisible;
}
</script>

<h3>{name}</h3>

{#if isVisible}
<div>
  <input id="title" class="w-full p-2" placeholder="Add a new task" />
  <textarea id="description" class="w-full p-2" placeholder="Task description" />
  <svg data-svgs-path="sm1/calendar_small.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="nonzero" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z">
    </path>
  </svg>
  <button class="rounded bg-red-300">Add Task</button>
  <button class="rounded bg-grey-300" on:click={toggleAddTask}>Cancel</button>
</div>
{:else}
  <button on:click={toggleAddTask}>Add New Task</button>
{/if}