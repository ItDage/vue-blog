<template>
    <div>

       <!--<div class="page-header">-->
        <!--<h1>Panels</h1>-->
      <!--</div>-->

      <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">热门文章</h3>
            </div>
            <div class="panel-body">
              <ul>
                <li>1. Java基础</li>
                <li>2. Java进阶</li>
                <li>3. JavaWeb</li>
                <li>4. Java框架</li>
              </ul>
            </div>
          </div>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">网站公告</h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
          </div>
        </div><!-- /.col-sm-4 -->
</template>

<script src="./static/layui/layui.js?t=1527693307625"></script>
<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      test: function () {
        layui.use('layer', function(){
          var layer = layui.layer;
          layer.msg("test");
        })
      }
    }
  }
</script>
