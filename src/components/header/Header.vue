<template>
  <div id="header">
    <nav class="navbar navbar-default navbar-fixed-top" style="margin-bottom: 0px;">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/home" class="navbar-brand">vue-blog version1</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li class=".active">
              <router-link to="/home">主页</router-link>
            </li>
            <li>
              <router-link to="/about">分类</router-link>
            </li>
            <li>
              <router-link to="/contact">时间线</router-link>
            </li>
            <li>
              <router-link to="/contact">图片</router-link>
            </li>
            <li>
              <router-link to="/contact">搜索</router-link>
            </li>
            <li>
              <router-link to="/contact">留言</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/contact">登录</router-link>
            </li>
            <li>
              <router-link to="/contact">注册</router-link>
            </li>
            <li>
              <router-link to="/contact"><i class="layui-icon" style="font-size: 20px;">&#xe676;</i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
  #header {
    margin-bottom: 0px;
  }
</style>
<script src="./static/layui/layui.js?t=1527693307625"></script>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        // subTitle:
      }
    },
    created() {
      console.log(this.$router);
      // alert(JSON.stringify(this.$router));
    },
    beforeRouteEnter(to, from, next) {
      console.log(to);
      console.log(from);
      console.log(next);
      next();
    },
    methods: {
      test: function () {
        layui.use('layer', function () {
          var layer = layui.layer;
          layer.msg("test");
        })
      }
    }
  }
</script>
