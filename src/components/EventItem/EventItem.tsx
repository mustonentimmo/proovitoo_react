import React from 'react';
import "./EventItem.scss";
import HorizontalList from "../HorizontalList/HorizontalList";
import Avatar from "../Avatar/Avatar";
import Date from "../Date/Date";
import { EventEntity } from "../../common/types";

interface EventItemProps {
    event: EventEntity;
}

const EventItem: React.FC<EventItemProps> = (props) => {

    const { event } = props;

    return (
    <div className="event-item">
        {event.profilePicture ? <Avatar imgUrl={event.profilePicture} /> : <Date date={event.date} />}
        <div className="event-item__info">
            <h3 className="event-item__title">{event.name}</h3>
            <HorizontalList feedback={event.data} className={"horizontal-list--small-margin-top"}/>
        </div>
    </div>
    )
}

export default EventItem