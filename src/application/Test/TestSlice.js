import { createSlice } from '@reduxjs/toolkit';
export const testSlice = createSlice({
  name: 'test', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState: {
    count: 1,
    title: 'redux toolkit pre',
  },
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    increment(state, { payload }) {
      // console.log(action);
      state.count = state.count + payload.step; // 内置了immutable
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});
// 导出actions
export const { increment, decrement } = testSlice.actions;
// 内置了thunk插件，可以直接处理异步请求
export const asyncIncrement = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(payload));
  }, 2000);
};
export default testSlice.reducer; // 导出reducer，在创建store时使用到
