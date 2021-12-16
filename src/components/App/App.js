import './App.scss';
import Header from "../Header/Header";
import BlogPost from "../BlogPost/BlogPost";

const App = () => (
    <div className="App">
        <div className="App__grid-container">
            <Header />
            <main className="App__inner">
                <BlogPost />
            </main>
        </div>
    </div>
)

export default App;
