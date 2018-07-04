<template>
  <ul id="LAY_demo1" class="flow-default">
    <div>
    <span id="articleList" v-for="item in items" v-bind:key="item.id">
      <div class="row">
        <div class="col-md-12">
          <el-card shadow="hover">
            <div slot="header" class="clearfix" style="">
            <span class="layui-badge layui-bg-green">原创</span>
            <span style="font-size: 15px; font-weight: bold;">{{item.title}}</span>
            </div>
            <div>
            <p style="text-indent:35px">{{item.content}}</p>
            </div>
            <div>
            <el-row>
            <div class="col-md-8">
            <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                style="font-size: 12px;">&#xe66e;</i>&nbsp;Java</a>
            <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                style="font-size: 12px;">&#xe66e;</i>&nbsp;Mysql</a>
            <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                style="font-size: 12px;">&#xe66e;</i>&nbsp;Web</a>
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
  </ul>
</template>

<style>
  /*页面小于1200不显示发布时间和浏览量*/
  @media screen and (max-width: 1200px) {
    #view, #publishDate {
      display: none;
    }
  }
</style>

<script src="./static/layui/layui.js?t=1527693307625"></script>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    mounted () {
      var that = this;
      layui.use('flow', function () {
        var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
        var flow = layui.flow;
        flow.load({
          elem: '#LAY_demo1' //流加载容器
          // , scrollElem: '#LAY_demo1' //滚动条所在元素，一般不用填，此处只是演示需要。
          , done: function (page, next) { //执行下一页的回调

            //模拟数据插入
            setTimeout(function () {
              var article = [];
              for (var i = 0; i < 5; i++) {
                article['title'] = 'Java入门到放弃';
                article['content'] = '当我们需要优化某个查询语句的时候，explain关键字可以帮助我们快速查找一些潜在的问题。使用方法很简单，只需要在select前加上explain运行即可附上每个列显示结果的含义，如下表（转自：http://blog.chinaunix.net/uid-540802-id-3419311.html）：idSELECT识别符。这是SELECT的查询序列号select_type';
                that.items.push(article);
              }
              //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
              //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
              next(that.items.join(''), page < 3); //假设总页数为 10
            }, 500);
          }
        });
      });
    }
  }
</script>

<style>
  /*页面小于1200不显示发布时间和浏览量*/
  @media screen and (max-width: 1200px) {
    #view, #publishDate {
      display: none;
    }
  }
</style>
