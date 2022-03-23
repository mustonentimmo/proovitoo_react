import { useState, useEffect } from "react";
import './App.scss';

import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSection from "../SidebarSection/SidebarSection";
import EventItem from "../EventItem/EventItem";
import BlogPost from "../BlogPost/BlogPost";
import Message from "../Message/Message";

import { Post, EventEntity } from "../../common/types";
import events from "../../mock/event"

import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { fetchPosts, postsSelector } from "../../features/postsSlice";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const App = () => {
    const dispatch = useDispatch();

    const [postsData, setPostsData] = useState<Post[]>( []);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const { posts, loading, hasError } = useSelector(postsSelector);

    useEffect( () => {
        setPostsData(posts);
        setFilteredPosts(posts);
    }, [posts])

    const handleChange = (value: string) => {
        const queryLowerCase = value.toLowerCase();
        const queryResults = postsData.filter((post: Post) =>
            post.title.toLowerCase().includes(queryLowerCase)
        )

        setFilteredPosts(queryResults);
    }

    const mapEvent = (eventType: EventEntity[]) => {
        return eventType.map((event, index) =>
            <EventItem key={index} event={event}/>
        )
    }

    return (
        <div className="app">
            <div className="app__grid-container">
            <Header/>
            <main className="app__inner">
                <Searchbar onInputChange={handleChange}/>
                {
                    hasError ? <Message text='Loading posts failed' /> : loading ? <Message text='Loading posts...'/> :
                    filteredPosts && filteredPosts.map((post: Post) =>
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

export default AppWrapper;
