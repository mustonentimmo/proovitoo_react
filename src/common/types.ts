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