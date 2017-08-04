// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'   //引入router
import VueResource from 'vue-resource'   //引入router
import App from './App'
import User from './components/user.vue'
import Test from './components/test.vue'

Vue.use(VueRouter)   //中间件
Vue.use(VueResource)   //中间件

Vue.config.productionTip = false

//设置路由
const router = new VueRouter({
  mode: 'history',   
  base: __dirname,   //当前路径
  routes:[          //配置路由
    {path:"/", component: User},
    {path: "/test", component: Test}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,    //提供router路由，否则报错
  template: `
    <div id="app">
      <ul>
        <li>
          <router-link to="/">User</router-link>
          <router-link to="/test">Test</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  `,
  components: { App }
}).$mount("#app")
