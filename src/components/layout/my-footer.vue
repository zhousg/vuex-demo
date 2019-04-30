<template>
  <div class="my-footer">
    <ul>
      <router-link tag="li" to="/hot"><a href="#"><span class="iconfont icon-remen"></span><p>正在热映</p></a></router-link>
      <router-link tag="li" to="/movie"><a href="#"><span class="iconfont icon-dianying"></span><p>即将上映</p></a></router-link>
      <router-link tag="li" to="/top"><a href="#"><span class="iconfont icon-top"></span><p>top250</p></a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'my-footer'
  }
</script>

<style scoped>
.my-footer{
  background: #069;
  text-align: center;
}
ul{
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 55px;
}
ul li{
  list-style: none;
  flex: 1;
}
ul li a{
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
ul li a p{
  padding: 0;
  margin: 0;
}
ul li.active a{
  color: #fa0;
  font-weight: bold;
  text-shadow: 1px 1px 1px green;
}
</style>
