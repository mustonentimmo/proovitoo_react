import './App.scss';
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import BlogPost from "../BlogPost/BlogPost";
import posts from "../../mock/post";

const App = () => (
    <div className="app">
        <div className="app__grid-container">
            <Header />
            <main className="app__inner">
            <Searchbar />
                {
                    posts.map(post =>
                        <BlogPost key={post.id} post={post}/>
                    )
                }
            </main>
        </div>
    </div>
)

export default App;
