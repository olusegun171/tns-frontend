<template>
  <BaseLayout>
    <ContactList />
  </BaseLayout>

</template>

<script>
import BaseLayout from './BaseLayout.vue'
import ContactList from  './page/ContactList.vue'
export default {
  name: 'App',
  components: {
    BaseLayout, ContactList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
