<template>
  <div class="home">
    111111111111
    <button @click="clickHandler"></button>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: 'home',
  data() { 
    return {

    }
  },

  methods: {
    clickHandler() {
      console.log(this.$store.state.num)
      this.$store.state.num++;
    }
  }
 }
</script>

<style lang="scss" scoped>
  
</style>