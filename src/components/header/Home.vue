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
              <el-row>
                <el-col :xs="24" :sm="16" :md="16" :lg="16"><p style="text-indent:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item.content}}</p></el-col>
                <el-col :xs="0" :sm="8" :md="8" :lg="8" id="articleImage"><img src="../../../static/image/wenyi.jpeg"
                                                                               width="250" height="100"/></el-col>
              </el-row>
            </div>
            <div class="row">
                <div class="col-xs-17 col-md-8">
                  <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                      style="font-size: 12px;">&#xe66e;</i>&nbsp;Java</a>
                  <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                      style="font-size: 12px;">&#xe66e;</i>&nbsp;Java</a>
                  <a href="/home" class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon"
                                                                                      style="font-size: 12px;">&#xe66e;</i>&nbsp;Java</a>
                </div>
                <div class="hidden-xs hidden-md hidden-sm col-md-4">
                  <i class="el-icon-view">(88)</i>
                  &nbsp;&nbsp;&nbsp;
                  <i class="el-icon-time">2018-06-02 15:09</i>
                </div>
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
  /*@media screen and (max-width: 1200px) {*/
  /*#view, #publishDate {*/
  /*display: none;*/
  /*}*/
  /*}*/
</style>

<script src="./static/layui/layui.js?t=1527693307625"></script>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    mounted() {
      var that = this;
      layui.use('flow', function () {
        var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
        var flow = layui.flow;
        flow.load({
          elem: '#LAY_demo1' //流加载容器
          // , scrollElem: '#LAY_demo1' //滚动条所在元素，一般不用填，此处只是演示需要。
          ,isAuto: true
          , done: function (page, next) { //执行下一页的回调
            //模拟数据插入
            console.log(page)
            setTimeout(function () {
              var lis = [];
              var count = 0;
              that.$http.get(that.url + "article/get?page=" + page).then(response => {
                count = response.data.data2;
                next(lis.join(''), page < count); //假设总页数为 10
                response.data.data.forEach(function (e) {
                  lis.push('<li>'+e.title +'</li>')
                  that.items.push(e);
                })
              }, response => {
                // eroor
              })
              console.log(count)
              //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
              //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多

            }, 500);
          }
        });
      });
    }
  }
</script>
