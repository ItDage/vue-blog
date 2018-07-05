<template>
  <ul class="layui-timeline">
    <li class="layui-timeline-item layui-anim layui-anim-upbit">
      <i class="layui-icon layui-timeline-axis" @click="show1 = !show1">&#xe63f;</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title" @click="show1 = !show1">8月18日</h3>
        <el-collapse-transition>
          <p v-show="show1" class="transition-box">
            layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
            <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
            <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class="layui-icon"></i>
          </p>
        </el-collapse-transition>
      </div>
    </li>
    <li class="layui-timeline-item layui-anim layui-anim-upbit">
      <i class="layui-icon layui-timeline-axis" @click="show2 = !show2">&#xe63f;</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title" @click="show2 = !show2">8月18日</h3>
        <el-collapse-transition>
          <p v-show="show2" class="transition-box">
            layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
            <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
            <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class="layui-icon"></i>
          </p>
        </el-collapse-transition>
      </div>
    </li>
    <li class="layui-timeline-item layui-anim layui-anim-upbit">
      <i class="layui-icon layui-timeline-axis" @click="show3 = !show3">&#xe63f;</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title" @click="show3 = !show3">8月18日</h3>
        <el-collapse-transition>
          <p v-show="show3" class="transition-box">
            layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
            <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
            <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class="layui-icon"></i>
          </p>
        </el-collapse-transition>
      </div>
    </li>
    <li class="layui-timeline-item layui-anim layui-anim-upbit">
      <i class="layui-icon layui-timeline-axis" @click="show4 = !show4">&#xe63f;</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title" @click="show4 = !show4">8月18日</h3>
        <el-collapse-transition>
          <p v-show="show4" class="transition-box">
            layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
            <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
            <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class="layui-icon"></i>
          </p>
        </el-collapse-transition>
      </div>
    </li>
    <li class="layui-timeline-item layui-anim layui-anim-upbit">
      <i class="layui-icon layui-timeline-axis" @click="show5 = !show5">&#xe63f;</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title" @click="show5 = !show5">2018年7月5日</h3>
        <el-collapse-transition>
          <p v-show="show5" class="transition-box">
            前后台打通。路很长，慢慢走
            <br>前端框架:vue+layui+elementui+bootstrap
            <br>后端框架:SpringBoot,Mybatis,Maven多模块管理 <i class="layui-icon"></i>
            <br>数据库:Mysql
            <br>服务器:阿里云
          </p>
        </el-collapse-transition>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TimeLine',
  data: () => ({
    show1: true,
    show2: true,
    show3: false,
    show4: false,
    show5: false
  })
}
</script>

<style>
  /*.transition-box {*/
  /*margin-bottom: 10px;*/
  /*width: 200px;*/
  /*height: 100px;*/
  /*border-radius: 4px;*/
  /*background-color: #409EFF;*/
  /*text-align: center;*/
  /*color: #fff;*/
  /*padding: 40px 20px;*/
  /*box-sizing: border-box;*/
  /*margin-right: 20px;*/
  /*}*/
</style>
