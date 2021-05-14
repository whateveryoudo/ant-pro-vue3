/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-14 16:55:25
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\vite.config.ts
 */
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { generateModifyVars } from './build/generate/generateModifyVars'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "/@/": path.resolve(__dirname, "src") + '/',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true
      }
    }
  }
});
