<!--
 * @Author: ykx
 * @Date: 2021-05-13 09:50:34
 * @LastEditTime: 2021-05-27 17:15:52
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
  width:100%;
  height: 100%;
}
</style>
