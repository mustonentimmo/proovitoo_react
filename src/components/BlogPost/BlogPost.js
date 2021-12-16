import "./BlogPost.scss"

const BlogPost = () => (
    <div className="blog-post">
        <img className="blog-post__img" src="#" alt="" />
        <div className="blog-post__details">
            <div className="blog-post__title"></div>
            <div className="blog-post__meta">
                Published by <span className="blog-post__author"></span> on <span className="blog-post__published-date"></span>
            </div>
            <div className="blog-post__text">
            </div>
            <div className="blog-post__tags">
                <div className="blog-post__tag"></div>
            </div>
            <ul className="blog-post__feedbacks">
                <li className="blog-post__feedback"></li>
            </ul>
        </div>
    </div>
)

export default BlogPost