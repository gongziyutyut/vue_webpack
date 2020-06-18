<template>
  <div id="app">
    hello FE
    <div>
      <router-link to="/Home">Home</router-link>
      <router-link to="/About">About</router-link>
      <button @click="jump">跳转</button>
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
      param: [
        {
          name: 'xx',
          age: 13
        },{
          name: 'yy',
          age: 14
        },{
          name: 'zz',
          age: 15
        }
      ],
      param1: [
        {
          name: 'xx',
          age: 13
        },{
          name: 'yy',
          age: 14
        },{
          name: 'zz',
          age: 15
        }
      ],
      flag: true
    }
  },

  methods: {
    jump () {
      let param = this.flag ? this.param : this.param1
      let urlSuffix = this.flag ? `data=${JSON.stringify(param)}&name=ssss&age=18&grade=4&work=3` : `data=${JSON.stringify(param)}&name=ssss&age=1`
      this.$router.push(`/${this.flag ? 'Home' : 'About'}?${urlSuffix}`)
      this.flag = !this.flag
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped> 

</style>

