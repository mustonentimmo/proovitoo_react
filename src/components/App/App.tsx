import { useState } from "react";
import './App.scss';
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSection from "../SidebarSection/SidebarSection";
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

    const mapEvent = (eventType: EventType[], isAvatar?: boolean) => {
        return eventType.map(event =>
            <EventItem title={event.name} eventData={event.data} eventDate={event.date} isAvatar={isAvatar} avatar={event.profilePicture} />
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
                        mapEvent(event.events)
                    }
                </SidebarSection>
                <SidebarSection title={"birthdays"}>
                    {
                        mapEvent(event.birthdays,  true)
                    }
                </SidebarSection>
                <SidebarSection title={"newcomers"}>
                    {
                        mapEvent(event.newComers, true)
                    }
                </SidebarSection>
            </Sidebar>
        </div>
    </div>
    )
}

export default App;
