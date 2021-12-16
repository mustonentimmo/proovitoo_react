import './App.css';
import Header from "../Header/Header";
import BlogPost from "../BlogPost/BlogPost";

const App = () => (
    <div className="App">
      <Header />
        <main className="App__inner">
            <BlogPost />
        </main>
    </div>
)

export default App;
