<template>
  <ul class="list"  v-if="list && list.length">
    <li v-for="item in list" :key="item.id">
      <router-link :to="{name:'item',params:{id:item.id}}">
        <img :src="'https://images.weserv.nl?url='+item.images.small" alt="">
        <div class="info">
          <h3>{{item.title}}</h3>
          <p style="color: #aaa">豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="(tag,i) in item.genres" :key="i">{{tag}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
  <div v-else>
    <span class="loading"></span>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'Vuex'

  export default {
    name: 'Top',
    computed: {
      ...mapState('movieStore', ['title','list'])
    },
    created () {
      this.resetData()
      this.getTop()
    },
    methods: {
      ...mapMutations('movieStore', ['resetData']),
      ...mapActions('movieStore', ['getTop'])
    }
  }
</script>

<style scoped>
</style>
