<script>
  export let title;
  export let description;
  export let completed;
</script>

<div class="border-2 p-2 border-solid rounded m-5">
  <div class="flex">
    <div>
      <input bind:checked={completed} type="checkbox" />
    </div>
    <div class="px-2">
      <div>{title}</div>
      <div class="text-gray-500">{description}</div>
    </div>
  </div>
</div>
