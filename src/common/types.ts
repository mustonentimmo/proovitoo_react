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
    name: string;
    profilePicture?: string;
    date?: string;
    data: string[];
}

export interface Events {
    events: {name: string, date: string, data: string[]}[];
    birthdays: Event[];
    newComers: Event[];
}