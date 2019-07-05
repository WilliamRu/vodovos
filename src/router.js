import Vue from 'vue'
import Router from 'vue-router'
import TheMainPage from "@/views/TheMainPage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheMainPage',
      component: TheMainPage
    }
  ]
})
