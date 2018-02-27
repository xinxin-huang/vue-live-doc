import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'
import routes from './routes'

Vue.use(VueRouter)

let routerConfig = {
  routes,
  mode: 'history',
  base: config.baseUri
}

export default new VueRouter(routerConfig)
