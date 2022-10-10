import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getRankListRequest } from '../../../api/request';

const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data: fromJS(data),
});

export const getRankList = () => {
  return (dispatch) => {
    getRankListRequest().then((data) => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    });
  };
};

const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data,
});
