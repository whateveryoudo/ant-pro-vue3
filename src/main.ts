/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-27 17:20:14
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\main.ts
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '/@/design/index.less'
import 'virtual:windi.css'

createApp(App).use(router).mount('#app')
