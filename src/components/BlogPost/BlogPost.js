import "./BlogPost.scss"

const BlogPost = () => (
    <div className="blog-post">
        <img className="blog-post__img" src="#" alt="" />
        <div className="blog-post__details">
            <div className="blog-post__title"></div>
            <div className="blog-post__meta">
                Published by <span className="blog-post__author">Timmo Mustonen</span> on <span className="blog-post__published-date">16.12.2021</span>
            </div>
            <div className="blog-post__text">
                <p>The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how thinking about composition can make you a better programmer, regardless of what language you use.</p>
            </div>
            <div className="blog-post__tags">
                <a href="#" className="blog-post__tag">#Learning</a>
                <a href="#" className="blog-post__tag">#React</a>
            </div>
            <ul className="blog-post__feedbacks">
                <li className="blog-post__feedback">7 views</li>
                <li className="blog-post__feedback">3 comments</li>
                <li className="blog-post__feedback">5 likes</li>
            </ul>
        </div>
    </div>
)

export default BlogPost