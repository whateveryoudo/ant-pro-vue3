<!--
 * @Author: ykx
 * @Date: 2021-05-13 09:50:34
 * @LastEditTime: 2021-05-14 16:51:40
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\App.vue
-->
<template>
  <app-provider>
    <router-view></router-view>
  </app-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppProvider } from "/@/components/Application";
export default defineComponent({
  name: "App",
  components: {
    AppProvider,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
