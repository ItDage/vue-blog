// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 给axios起别名
Vue.prototype.$http = axios
// http访问接口
Vue.prototype.url = 'http://www.itdage.top/blog-web/'
// Vue.prototype.url = 'https://www.itdage.top/blog-web/'

Vue.use(VueAxios, axios)

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
