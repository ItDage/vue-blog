<template>
  <div>
    <div id="app">
      <Header></Header>
      <!--<Test></Test>-->
    </div>
    <div class="container theme-showcase" role="main">
      <SubNav></SubNav>
      <router-view></router-view>
      <!--<div class="row">-->
        <!--<div class="col-md-8">-->
          <!--<router-view></router-view>-->
        <!--</div>-->
        <!--<div class="col-md-4">-->
          <!--<MainRight></MainRight>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <!--<div> <SubNav></SubNav></div>-->
  </div>
</template>

<script>
import Header from './components/header/Header'
import SubNav from './components/header/SubNav'
import Test from './components/header/Test'
import About from './components/header/About'
import MainLeft from './components/public/MainLeft'
import MainRight from './components/public/MainRight'

export default {
  name: 'App',
  components: {Header, SubNav, MainLeft, MainRight, About, Test}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
</style>
