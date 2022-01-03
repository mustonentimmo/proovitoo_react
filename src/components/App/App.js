import './App.scss';
import Header from "../Header/Header";
import BlogPost from "../BlogPost/BlogPost";

const App = () => (
    <div className="app">
        <div className="app__grid-container">
            <Header />
            <main className="app__inner">
                <BlogPost />
            </main>
        </div>
    </div>
)

export default App;
