<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    color: #2c3e50;
    background: #F4F4F4;
    overflow: hidden;
  }
</style>
