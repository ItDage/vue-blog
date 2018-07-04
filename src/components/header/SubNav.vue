<template>
  <div>
      <blockquote class="layui-elem-quote" style="margin-top: -12px;">
        <div class="row">
          <div class="col-md-8">
            <!--<el-breadcrumb separator="/">-->
              <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
              <!--<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
              <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
              <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
            <!--</el-breadcrumb>-->
            <p style="font-size: 14px">还没想好写点啥</p>
          </div>
          <div class="col-md-4">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>当前时间:{{ nowDate }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </blockquote>
  </div>
</template>
<style>
</style>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  computed: {
    nowDate: function () {
      var now = new Date()

      return now.toLocaleTimeString()
    }
  }
}
</script>
