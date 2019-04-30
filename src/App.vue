<template>
  <div id="app">
    <my-header></my-header>
    <div class="wrapper">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './components/layout/my-header'
  import myFooter from './components/layout/my-footer'

  export default {
    name: 'app',
    components: {
      myHeader,
      myFooter
    }
  }
</script>

<style>
  .v-enter,.v-leave-to{
    opacity: 0;
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.3s;
  }
  .loading{
    display: block;
    width: 30px;
    height: 30px;
    border: 3px dashed #069;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    left: 50%;
    top: 50%;
    animation: circle 1s;
  }
  @keyframes circle {
    from{}
    to{
      transform: translate(-50%,-50%) rotate(360deg);
    }
  }
  #app {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    flex: 1;
    overflow: hidden;
  }

  .list {
    margin: 0;
    padding: 5px 10px;
    box-sizing: border-box;
    height: 100%;
    overflow: scroll;
  }

  .list li {
    height: 100px;
    border-bottom: 1px solid #eee;
  }

  .list li img {
    width: 70px;
    height: 90px;
    display: inline-block;
    float: left;
    margin-top: 5px;
  }

  .list li a {
    text-decoration: none;
    color: #333;
    display: block;
    height: 100%;
  }

  .list li .info {
    overflow: hidden;
    font-size: 12px;
    padding-left: 10px;
  }

  .list li .info h3 {
    margin: 0;
    padding: 0;
  }

  .list li .info p {
    margin: 0;
    padding: 5px 0;
  }

  .tag {
    background: green;
    color: #fff;
    margin-right: 5px;
    padding: 2px 3px
  }
</style>
