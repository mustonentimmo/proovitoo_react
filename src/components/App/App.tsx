import { useState } from "react";
import './App.scss';
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSection from "../SidebarSection/SidebarSection";
import EventItem from "../EventItem/EventItem";
import BlogPost from "../BlogPost/BlogPost";
import { Post, EventEntity } from "../../common/types"
import posts from "../../mock/post";
import events from "../../mock/event"

const App = () => {
    let [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

    const handleChange = (value: string) => {
        let queryLowerCase = value.toLowerCase();
        let queryResults = posts.filter(post =>
            post.title.toLowerCase().includes(queryLowerCase)
        )

        setFilteredPosts(queryResults);
    }

    const mapEvent = (eventType: EventEntity[]) => {
        return eventType.map(event =>
            <EventItem event={event}/>
        )
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
                    {
                        mapEvent(events.events)
                    }
                </SidebarSection>
                <SidebarSection title={"birthdays"}>
                    {
                        mapEvent(events.birthdays)
                    }
                </SidebarSection>
                <SidebarSection title={"newcomers"}>
                    {
                        mapEvent(events.newComers)
                    }
                </SidebarSection>
            </Sidebar>
        </div>
    </div>
    )
}

export default App;
