<template>
  <div id="app">
    <!--<img class="item-pic" v-lazy="img">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      img: require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="scss">
  $color : red;
  $font-size : 30px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  font-size: $font-size;
  margin-top: 60px;
}
</style>
