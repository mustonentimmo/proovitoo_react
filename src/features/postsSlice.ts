import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios  from "axios";

export const initialState = {
    loading: false,
    hasError: false,
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: state => {
            state.loading = true
        },
        getPostsSuccess: (state, { payload }) => {
            state.loading = false
            state.hasError = false
            state.posts = payload
        },
        getPostsFailure: (state, { payload }) => {
            state.loading = false
            state.hasError = true
            state.posts = []
        }
    }
});

export const {getPosts, getPostsSuccess, getPostsFailure} = postsSlice.actions

export const postsSelector = (state: RootState) => state.posts;

export default postsSlice.reducer

export const fetchPosts = () => {
    return function(dispatch: Dispatch) {
        dispatch(getPosts());
        axios.get('https://61d6a18b35f71e0017c2e716.mockapi.io/Posts')
            .then(response => {
                dispatch(getPostsSuccess(response.data));
            })
            .catch(error => {
                dispatch(getPostsFailure(error));
            })
    }
}