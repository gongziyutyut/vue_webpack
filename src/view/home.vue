<template>
  <div class="home">
    111111111111
    <button @click="clickHandler" class="btn">按钮</button>
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
  .home {
    background: green;
    .btn {
      border: none;
    }
  }
</style>