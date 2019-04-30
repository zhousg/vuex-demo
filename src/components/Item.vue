<template>
  <div class="container" v-if="item">
    <div class="item">
      <img :src="'https://images.weserv.nl?url='+item.images.small" alt="">
      <div>
        <p style="color: #aaa;">豆瓣评分：{{item.rating.average}}</p>
        <p style="color: #aaa;">产地：{{item.countries.join(',')}}</p>
        <p>
          <span class="tag" v-for="(tag,i) in item.genres" :key="i">{{tag}}</span>
        </p>
        <p>{{item.summary}}</p>
      </div>
    </div>
    <div class="cast" v-for="(cast,i) in item.casts" :key="i">
      <img :src="'https://images.weserv.nl?url='+cast.avatars.small">
      <p style="font-size: 12px;margin: 5px;width: 100%;overflow: hidden;height: 18px">{{cast.name}}</p>
    </div>
  </div>
  <div v-else>
    <span class="loading"></span>
  </div>
</template>

<script>
  import { mapState,mapMutations, mapActions } from 'Vuex'

  export default {
    name: 'Movie',
    computed: {
      ...mapState('movieStore', ['title', 'item'])
    },
    created () {
      this.resetData()
      this.getDetail(this.$route.params.id)
    },
    methods: {
      ...mapMutations('movieStore', ['resetData']),
      ...mapActions('movieStore', ['getDetail'])
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    overflow: auto;
  }

  .cast {
    display: inline-block;
    padding: 10px;
    width: 33.33%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .cast img {
    width: 100%;
  }

  .item {
    padding: 10px;
    overflow: hidden;
  }

  .item img {
    width: 150px;
    float: left;
    margin-right: 5px;
  }

  .item p {
    margin: 0;
    font-size: 12px;
    padding: 5px 0;
  }
</style>
