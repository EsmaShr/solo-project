
import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

import axios from 'axios';
const url = 'http://localhost:8080/posts';
 const fetchPostsRequest = () => axios.get(url);
 const createPostRequest = (newPost) => axios.post(url, newPost);
 const deletePostRequest = (id) => axios.delete(`${url}/${id}`);


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPostsRequest();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createPostRequest(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await await deletePostRequest(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};