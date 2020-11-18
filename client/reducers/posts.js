import * as types from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case types.FETCH_ALL:
      return action.payload;
    case types.CREATE:
      return [...posts, action.payload];
    case types.DELETE:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
