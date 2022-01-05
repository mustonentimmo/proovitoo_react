import { useState } from "react";
import './App.scss';
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import BlogPost from "../BlogPost/BlogPost";
import { Post } from "../../common/types"
import posts from "../../mock/post";

const App = () => {
    let [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

    const handleChange = (value: string) => {
        let queryResults = posts.filter(post =>
            post.title.toLowerCase().includes(value)
        )

        setFilteredPosts(queryResults);
    }

    return (
    <div className="app">
        <div className="app__grid-container">
            <Header/>
            <main className="app__inner">
                <Searchbar onInputChange={handleChange}/>
                {
                    filteredPosts.map(post =>
                        <BlogPost key={post.id} post={post}/>
                    )
                }
            </main>
        </div>
    </div>
    )
}

export default App;
