import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "../redux/postTypes";

export interface Post {
    id: number;
    title: string;
    postImg?: string;
    author: string;
    views?: number,
    comments?: number,
    likes?: number,
    publishedAt?: string;
    createdAt?: string;
    postText?: string;
    postTags?: string[];
    postFeedback?: string[];
    content?: string;
}

export interface EventEntity {
    name: string;
    profilePicture?: string;
    date?: string;
    data: string[];
}

export interface Events {
    events: EventEntity[];
    birthdays: EventEntity[];
    newComers: EventEntity[];
}

export interface RootState {
    loading: boolean;
    posts: Post[];
    error: {};
}

export type Action = | { type: typeof FETCH_POSTS_REQUEST }
    | { type: typeof FETCH_POSTS_SUCCESS; payload: Post[] } | { type: typeof FETCH_POSTS_FAILURE, payload: {}}