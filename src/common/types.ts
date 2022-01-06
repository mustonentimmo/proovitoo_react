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


