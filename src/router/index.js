import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    // component: () => import("../views/Home.vue"),
    component: Home,
    children: [
      {
        path: '/goodCategory',
        name: 'goodCategory',
        component: () => import("@/views/goods/goodsCategory/goodsCategoryList.vue"),

      },
      {
        path: '/goodsBrand',
        name: 'goodsBrand',
        component: () => import("@/views/goods/goodsBrand/goodsBrandList"),
      },
      {
        path: '/departmentList',
        name: 'departmentList',
        component: () => import("@/views/system/Department/DepartmentList"),
      }
      ,  {
        path: '/userList',
        name: 'userList',
        component: () => import("@/views/system/User/UserList"),
      }
      ,  {
        path: '/roleList',
        name: 'roleList',
        component: () => import("@/views/system/Role/RoleList"),
      },  {
        path: '/menuList',
        name: 'menuList',
        component: () => import("@/views/system/Menu/MenuList"),
      },  {
        path: '/systemCode',
        name: 'systemCode',
        component: () => import("@/views/system/config/code"),
      },  {
        path: '/document',
        name: 'document',
        component: () => import("@/views/system/config/systemDocument"),
      }

    ]

  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
