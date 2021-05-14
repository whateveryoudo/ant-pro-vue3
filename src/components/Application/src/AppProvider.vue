<!--
 * @Author: ykx
 * @Date: 2021-05-12 15:34:43
 * @LastEditTime: 2021-05-14 17:19:52
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\components\Application\src\AppProvider.vue
-->
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { createAppProviderContext } from "./useAppContext";
import { prefixCls } from "/@/settings/designSettings";
export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: prefixCls
    },
  },
  setup(props, { slots }) {
    const { prefixCls } = toRefs(props);
    createAppProviderContext({ prefixCls });
    return () => slots.default?.();
  },
});
</script>
