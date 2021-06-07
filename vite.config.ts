/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-27 17:02:37
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\vite.config.ts
 */
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from 'vite-plugin-windicss'
import { generateModifyVars } from './build/generate/generateModifyVars'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS() ],
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
