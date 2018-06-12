<template>
    <div>
      <span id="articleList" v-for="item in items" v-bind:key="item.id">
        <div class="row">
          <div class="col-md-12">
            <el-card shadow="hover">
              <div slot="header" class="clearfix" style="">
                <span class="layui-badge layui-bg-green">原创</span>
                <span style="font-size: 15px; font-weight: bold;">Java入门到放弃</span>
              </div>
              <div>
                <p style="text-indent:35px">当我们需要优化某个查询语句的时候，explain关键字可以帮助我们快速查找一些潜在的问题。使用方法很简单，
                  只需要在select前加上explain运行即可附上每个列显示结果的含义，如下表（转自：http://blog.chinaunix.net/uid-540802-id-3419311.html）：
                  idSELECT识别符。这是SELECT的查询序列号select_type</p>
              </div>
              <div>
               <el-row>
                 <div class="col-md-8">
                   <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon" style="font-size: 12px;">&#xe66e;</i>&nbsp;Java</a>
                   <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon" style="font-size: 12px;">&#xe66e;</i>&nbsp;Mysql</a>
                   <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon" style="font-size: 12px;">&#xe66e;</i>&nbsp;Web</a>
                 </div>
                 <div class="col-md-1" id="view">
                    <i class="el-icon-view">(88)</i>
                 </div>
                 <div class="col-md-3" id="publishDate">
                    <i class="el-icon-time">2018-06-02 15:09</i>
                 </div>
              </el-row>
              </div>
            </el-card>
          </div>
        </div>
        <br>
      </span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' }
      ]
    }
  }
}
</script>

<style>
  /*页面小于1200不显示发布时间和浏览量*/
  @media screen and (max-width: 1200px) {
    #view, #publishDate{
      display: none;
    }
  }
</style>
