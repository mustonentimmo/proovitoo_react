import { useState, useEffect } from "react";
import './App.scss';

import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSection from "../SidebarSection/SidebarSection";
import EventItem from "../EventItem/EventItem";
import BlogPost from "../BlogPost/BlogPost";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

import { Post, EventEntity } from "../../common/types";
import events from "../../mock/event"

import { Provider, useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {store, fetchPosts} from '../../redux'

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const App = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState<Post[]>( []);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const postsData = useSelector((state: RootStateOrAny) => state && state.posts.data);
    const isLoading = useSelector((state: RootStateOrAny) => state && state.loading);

    useEffect( () => {
        setPosts(postsData);
        setFilteredPosts(postsData)
    }, [postsData])

    const handleChange = (value: string) => {
        const queryLowerCase = value.toLowerCase();
        const queryResults = posts.filter((post: Post) =>
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
                    isLoading ? <LoadingIndicator/> :
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
