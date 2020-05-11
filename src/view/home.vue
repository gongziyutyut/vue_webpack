<template>
  <div class="home">
    111111111111
    <button @click="clickHandler" class="btn">按钮</button>
    <Casousel :carousel="carousel" :carouselId="carouselId"/> 
  </div>
</template>

<script>
import { constants } from 'crypto';
import Casousel from '@/components/carousel'
export default {
  name: 'home',
  data() { 
    return {
      carouselId: 'homeCarousel',
      carousel: [
        {
          img: require('../asset/img/banner-home1.jpg'),
          location: '',
          target: '_blank',
          color: '#1a0882',
          class: 'one'
        },
        {
          img: require('../asset/img/banner-home2.jpg'),
          location: '',
          target: '_blank',
          color: '#13142c',
          class: 'two'
        },
        {
          img: require('../asset/img/banner-home3.jpg'),
          location: '',
          target: '_blank',
          color: '#04003f',
          class: 'three'
        },
        {
          img: require('../asset/img/banner-home4.jpg'),
          location: '',
          target: '_blank',
          color: '#08102a',
          class: 'four'
        },
        {
          img: require('../asset/img/banner-home5.jpg'),
          location: '',
          target: '_blank',
          color: '#000054',
          class: 'five'
        },
      ]
    }
  },

  components: {
    Casousel
  },

  methods: {
    clickHandler() {
      console.log(this.$store.state.num)
      this.$store.state.num++;
    }
  }
 }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
  .home {
    background: green;
    .btn {
      border: none;
    }
  }
</style>