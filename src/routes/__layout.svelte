<script>
  import "../app.css";
  import Nav from "$lib/Nav.svelte";
</script>

<div class="container mx-auto">
    <div class="flex flex-row flex-wrap py-4">
        <aside class="w-full h-screen sm:w-1/3 md:w-1/4 px-2 border-r-2">
            <Nav>
              <slot />
            </Nav>
        </aside>
        <main role="main" class="w-full h-screen sm:w-2/3 md:w-3/4 pt-1 px-2">
          <slot />
        </main>
    </div>
</div>
