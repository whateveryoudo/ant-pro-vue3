<!--
 * @Author: ykx
 * @Date: 2021-05-11 17:13:32
 * @LastEditTime: 2021-05-14 17:22:31
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\views\login\index.vue
-->
<template>
  <div :class="prefixCls">
    登录界面111-{{prefixCls}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
export default  defineComponent({
  data() {
    return {};
  },
  setup () {
    const { prefixCls } = useDesign('login');
    return {
      prefixCls
    }
  },
  created() {},
  mounted() {},
});
</script>
<style lang="less">
@prefix-cls: ~"@{namespace}-login";
.@{prefix-cls} {
  background-image: url(/@/assets/svg/login-bg-dark.svg);
}
</style>
