/**
 * 初始化配置
 */
import 'normalize.css'
import 'highlight.js/styles/github.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import config from './config'
import routes from './router/routes'
import demo from './components/live-demo'

/* 安装vue属性 */
Vue.use(ElementUI)
Vue.component('falcon-demo', demo)
Vue.prototype.$falcon = Vue.falcon = { config, routes }
