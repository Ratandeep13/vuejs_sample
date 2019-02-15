<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <AssistantComponent v-bind:pageNames="pagesName"></AssistantComponent>
    <router-view/>
  </div>
</template>

<script>
import AssistantComponent from '@/components/AssistantComponent'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['pagesName'])
  },
  components: {
    AssistantComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
