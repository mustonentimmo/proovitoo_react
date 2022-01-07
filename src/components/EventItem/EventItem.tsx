import "./EventItem.scss";
import HorizontalList from "../HorizontalList/HorizontalList";

const EventItem = (props) => {

    const { title, children, eventData } = props;

    return (
    <div className="event-item">
        {children}
        <div className="event-item__info">
            <div className="event-item__title">{title}</div>
            <HorizontalList feedback={eventData}/>
        </div>
    </div>
    )
}

export default EventItem