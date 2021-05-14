/*
 * @Author: ykx
 * @Date: 2021-05-11 15:38:21
 * @LastEditTime: 2021-05-13 10:04:18
 * @LastEditors: your name
 * @Description:
 * @FilePath: \ant-pro-vue3\src\router\routes.ts
 */
import type { AppRouteRecordRaw } from "./types";
import { PageEnums } from "/@/enums/pageEnums";
const Login = () => import("/@/views/login/index.vue");
const Dashboard = () => import("/@/views/dashboard/index.vue");
const asyncRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: { title: "看板" },
  },
];

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnums.BASE_HOME,
  meta: {
    title: "Root",
  },
  children: [],
};
export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: Login,
  meta: {
    title: "登录页",
  },
};
export const basicRoutes = [LoginRoute, RootRoute, ...asyncRoutes];
