<script context="module">
export async function load({fetch, page}) {
  try{
    const res = await fetch(`/projects/${page.params.id}`);
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
export let project
</script>
<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>TODO</h1>
<br />
{project}
