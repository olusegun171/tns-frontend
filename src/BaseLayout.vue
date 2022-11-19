<template>
    <div class="app-layout">
        <div class="main">
          <navbar-component>
            <NavBar/>
          </navbar-component>
          <main>
            <slot name="main-content"></slot>
          </main>
        </div>
      </div>
    </template>
    
    <script>
      import NavBar from './components/NavBar.vue';
      export default {
        name: 'BaseLayout',
        components: { NavBar
        }
      };
    </script>