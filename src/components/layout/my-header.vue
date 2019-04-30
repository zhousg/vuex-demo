<template>
  <div class="my-header">
    <span>{{title}}</span>
  </div>
</template>

<script>
  import {mapState} from 'Vuex'
  export default {
    name: 'my-header',
    computed: {
      ...mapState('movieStore',['title'])
    }
  }
</script>

<style scoped>
.my-header{
  height: 50px;
  line-height: 48px;
  background: #069;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>
