import { useState } from "react";
import './App.scss';
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSection from "../SidebarSection/SidebarSection";
import Avatar from "../Avatar/Avatar";
import EventItem from "../EventItem/EventItem";
import BlogPost from "../BlogPost/BlogPost";
import { Post, EventType } from "../../common/types"
import posts from "../../mock/post";
import event from "../../mock/event"


const App = () => {
    let [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

    const handleChange = (value: string) => {
        let queryLowerCase = value.toLowerCase();
        let queryResults = posts.filter(post =>
            post.title.toLowerCase().includes(queryLowerCase)
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
            <Sidebar>
                <SidebarSection title={"events"}>

                </SidebarSection>
                <SidebarSection title={"birthdays"}>
                </SidebarSection>
                <SidebarSection title={"newcomers"}>
                </SidebarSection>
            </Sidebar>
        </div>
    </div>
    )
}

export default App;
