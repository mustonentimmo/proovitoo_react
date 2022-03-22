import axios from 'axios';
import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from './postTypes';

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts.data
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {
    return function(dispatch) {
        dispatch(fetchPostsRequest());
        axios.get('https://61d6a18b35f71e0017c2e716.mockapi.io/Posts')
        .then(response => {
            dispatch(fetchPostsSuccess(response));
        })
        .catch(error => {
            dispatch(fetchPostsFailure(error));
        })
    }
}