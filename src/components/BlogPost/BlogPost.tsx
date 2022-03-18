import React from 'react';
import "./BlogPost.scss"
import HorizontalList from "../HorizontalList/HorizontalList";
import { Post } from "../../common/types"

const BlogPost: React.FC<{post: Post}> = (props) => {

    const feedback: string[] = [];

    const feedbackToArray = () => {
        for (const [key, value] of Object.entries(props.post)) {
            if(key === "views" || key === "comments" || key === "likes") {
                feedback.push(`${value} ${key}`);
            }
        }
    }
    feedbackToArray()

    return (
        <div className="blog-post">
            <img className="blog-post__img" src={props.post.postImg ? props.post.postImg : "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80"} alt="" />
            <div className="blog-post__details">
                <div className="blog-post__title">
                    <h1>{props.post.title}</h1>
                </div>
                <div className="blog-post__meta">
                    Published by <span className="blog-post__author">{props.post.author}</span> on <span className="blog-post__published-date">{props.post.createdAt}</span>
                </div>
                <div className="blog-post__text">
                    <p>{props.post.content}</p>
                </div>
                <div className="blog-post__tags">
                </div>
                <HorizontalList feedback={feedback} />
            </div>
        </div>
    )
}

export default BlogPost