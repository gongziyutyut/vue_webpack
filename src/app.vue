<template>
  <div id="app">
    hello FE
    <div>
      <router-link to="/Home">Home</router-link>
      <router-link to="/About">About</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped> 

</style>

