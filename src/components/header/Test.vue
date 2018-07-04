<template>
  <div>
    <button v-on:click = "test">测试layui</button>
  </div>

</template>

<script src="./static/layui/layui.js?t=1527693307625"></script>
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
  },
  methods: {
    test: function (event) {
      layui.use('layer', function() {
        var $ = layui.jquery, layer = layui.layer
        layer.msg('测试layui')
      })
    }
  }
}
</script>

<style>
@media screen and (max-width: 700px) {
  #nav_herizontal {
    display: none;
  }
}

@media screen and (min-width: 700px) {
  #nav_vertical {
    display: none;
  }
}
</style>
