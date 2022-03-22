import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "./postTypes";
import { InitialState, Action } from "../common/types";

export const initialState: InitialState = {
    loading: false,
    posts: [],
    error: {}
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: '',
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload,
            }
        default:
            return state
    }
}
