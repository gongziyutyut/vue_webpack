<template>
  <div class="about">
    About222222222
    <Grandpa :name="name" :oppo="oppo"></Grandpa>
  </div>
</template>

<script>
import Grandpa from '@/components/grandpa'
export default {
  data() { 
    return {
      name: 'grandpa',
      oppo: "OPPO"
    }
  },
  components: {
    Grandpa
  },

  created() {
    console.log(this.$store.state.num);
  }

 }
</script>

<style lang="scss" scoped>
  
</style>