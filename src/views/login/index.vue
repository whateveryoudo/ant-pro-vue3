<!--
 * @Author: ykx
 * @Date: 2021-05-11 17:13:32
 * @LastEditTime: 2021-05-27 18:01:00
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\views\login\index.vue
-->
<template>
  <div :class="prefixCls" class="h-full w-full px-4 relative">
    登录界面111-{{ prefixCls }}
    <div class="container relative h-full py-2 mx-auto sm:px-10">
      <div class="flex h-full">
        <!-- 左侧内容 -->
        <div class="hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4">
          我是左侧内容
        </div>
      </div>
      </div> 
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useDesign } from "/@/hooks/web/useDesign";
export default defineComponent({
  data() {
    return {};
  },
  setup() {
    const { prefixCls } = useDesign("login");
    return {
      prefixCls,
    };
  },
  created() {},
  mounted() {},
});
</script>
<style lang="less">
@prefix-cls: ~"@{namespace}-login";
.@{prefix-cls} {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url(/@/assets/svg/login-bg.svg);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: "";
  }
}
</style>
