// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, asyncIncrement } from './TestSlice'; // 引入actions
function Test() {
  const { count } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment({ step: 2 })); // dispatch派发action
        }}
      >
        {count}
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(asyncIncrement({ step: 1 }));
        }}
      >
        {count}
      </button>
    </div>
  );
}
export default Test;
