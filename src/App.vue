<template>
  <div id="app">
    <router-view name="Login"></router-view>
    <router-view name="Hello"></router-view>
  </div>
</template>

<script>
  import Login from './components/Login.vue';
  export default {
    name: 'app',
    data () {
      return{

      }
    },

  }

</script>

<style>

</style>
