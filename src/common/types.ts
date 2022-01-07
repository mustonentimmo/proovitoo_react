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

export type EventType = {
    name: string;
    profilePicture?: string;
    date?: string;
    data: string[];
}

export interface Event {
    events: {name: string, date: string, data: string[]}[];
    birthdays: EventType[];
    newComers: EventType[];
}