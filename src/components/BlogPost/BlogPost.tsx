import React from 'react';
import "./BlogPost.scss"
import HorizontalList from "../HorizontalList/HorizontalList";

interface BlogPostProps {
    post: {
        id: number;
        title: string;
        postImg: string;
        author: string;
        publishedAt: string;
        postText: string;
        postTags: string[];
        postFeedback: string;
    }
}

const BlogPost: React.FC<BlogPostProps> = (props) => (
        <div className="blog-post">
            <img className="blog-post__img" src={props.post.postImg} alt="" />
            <div className="blog-post__details">
                <div className="blog-post__title">
                    <h1>{props.post.title}</h1>
                </div>
                <div className="blog-post__meta">
                    Published by <span className="blog-post__author">{props.post.author}</span> on <span className="blog-post__published-date">{props.post.publishedAt}</span>
                </div>
                <div className="blog-post__text">
                    <p>{props.post.postText}</p>
                </div>
                <div className="blog-post__tags">
                {
                    props.post.postTags.map(tag => (
                        <a key={tag} href="#" className="blog-post__tag">{tag}</a>
                        )
                    )
                }
                </div>
                <HorizontalList feedback={props.post.postFeedback}/>
            </div>
        </div>
)

export default BlogPost