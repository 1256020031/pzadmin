import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "控制台",
          icon: "el-icon-s-home",
        },
      },
      {
        path: "/permission",
        name: "permission",
        meta: {
          title: "权限管理",
          icon: "el-icon-user",
        },
        children: [
          {
            path: "/permission/account",
            name: "账号管理",
            component: () => import("@/views/PermissionManage/AccountManage/index.vue"),
            meta: {
              title: "账号管理",
              icon: "el-icon-s-home",
            },
          },
          {
            path: "/permission/menu",
            name: "菜单管理",
            component: () => import("@/views/PermissionManage/MenuManage/index.vue"),
            meta: {
              title: "菜单管理",
              icon: "el-icon-s-home",
            },
          },
        ]
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "DIDI陪诊",
          icon: "el-icon-user",
        },
        children: [
          {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("@/views/dashboard/index.vue"),
            meta: {
              title: "陪护管理",
              icon: "el-icon-s-home",
            },
          },
          {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("@/views/dashboard/index.vue"),
            meta: {
              title: "订单管理",
              icon: "el-icon-s-home",
            },
          },
        ]
      }
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
