/*
 * @Author: ykx
 * @Date: 2021-05-12 14:26:09
 * @LastEditTime: 2021-05-14 16:36:08
 * @LastEditors: your name
 * @Description:
 * @FilePath: \ant-pro-vue3\src\hooks\web\useDesign.ts
 */
import { useAppProviderContext } from "/@/components/Application";
export function useDesign(scope: string) {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
  };
}
