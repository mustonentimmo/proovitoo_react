import React from 'react';
import "./EventItem.scss";
import HorizontalList from "../HorizontalList/HorizontalList";
import Avatar from "../Avatar/Avatar";
import Date from "../Date/Date";

interface EventItemProps {
    title: string;
    eventData: string[];
    isAvatar?: boolean;
    avatar?: string;
    eventDate?: string;
}

const EventItem: React.FC<EventItemProps>= (props) => {

    const { title, eventData, isAvatar, eventDate, avatar } = props;

    return (
    <div className="event-item">
        {isAvatar ? <Avatar imgUrl={avatar} /> : <Date info={eventDate} />}
        <div className="event-item__info">
            <h3 className="event-item__title">{title}</h3>
            <HorizontalList feedback={eventData} className={"horizontal-list--small-margin-top"}/>
        </div>
    </div>
    )
}

export default EventItem