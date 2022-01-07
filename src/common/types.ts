export interface Post {
    id: number;
    title: string;
    postImg: string;
    author: string;
    publishedAt: string;
    postText: string;
    postTags: string[];
    postFeedback: string[];
}

export interface Event {
    events: {}[];
    birthdays: {}[];
    newComers: {}[];
}