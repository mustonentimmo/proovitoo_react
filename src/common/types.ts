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
    events: {name: string, date: string, data: string[]}[];
    birthdays: {name: string, profilePicture: string, data: string[]}[];
    newComers: {}[];
}