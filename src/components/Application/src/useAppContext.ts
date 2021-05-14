/*
 * @Author: ykx
 * @Date: 2021-05-12 17:09:04
 * @LastEditTime: 2021-05-14 16:37:25
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ant-pro-vue3\src\components\Application\src\useAppContext.ts
 */
import { InjectionKey, Ref } from 'vue'
import { createContext, useContext } from '/@/hooks/core/useContext'
export interface AppProviderContextProps{
    prefixCls: Ref<string>;
}
const key: InjectionKey<AppProviderContextProps> = Symbol();
export function createAppProviderContext (context:AppProviderContextProps) {
    return createContext<AppProviderContextProps>(context, key);
}
export function useAppProviderContext ()  {
    return useContext<AppProviderContextProps>(key);
}