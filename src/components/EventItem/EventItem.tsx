import React from 'react';
import "./EventItem.scss";
import HorizontalList from "../HorizontalList/HorizontalList";

interface EventItemProps {
    title: string;
    eventData: string[];
}

const EventItem: React.FC<EventItemProps>= (props) => {

    const { title, children, eventData } = props;

    return (
    <div className="event-item">
        {children}
        <div className="event-item__info">
            <h3 className="event-item__title">{title}</h3>
            <HorizontalList feedback={eventData} className={"horizontal-list--small-margin-top"}/>
        </div>
    </div>
    )
}

export default EventItem