import { configureStore } from '@reduxjs/toolkit';
import TestSlice from '../application/Test/TestSlice';
// import HomeSlice from '../application/Home/HomeSlice';
// import movieSlice from './features/movieSlice';

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    test: TestSlice,
    // home: HomeSlice,
    // movie: movieSlice,
  },
});
