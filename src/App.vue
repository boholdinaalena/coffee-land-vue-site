<template>
  <div id="app">
    <v-main-wrapper/>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';

export default {
  name: 'app',
  components: {
    vMainWrapper,
  },
}
</script>

<style lang="scss">
#app {
  width: 100%;
}
</style>