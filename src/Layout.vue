<template>
        <div class="main">
            <NavbarHeader />
          <main class="md:container md:mx-auto my-4">
            <slot name="main-content"></slot>
          </main>
        </div>
    </template>
    
    <script>
      import NavbarHeader from './components/NavBar.vue';
      export default {
        name: 'BaseLayout',
        components: { NavbarHeader
        }
      };
    </script>