import React from 'react';
import "./HorizontalList.scss"

interface HorizontalListProps {
    feedback: string[];
    className?: string;
}

const HorizontalList: React.FC<HorizontalListProps> = ({feedback, className}) => {

    const colorIndicator = (item: string) => {
        if(item.toLowerCase() === "going") {
            return "#008000"
        }
        if(item.toLowerCase() === "tomorrow") {
            return "#ff0000"
        }
    }

    return (
        <ul className={`horizontal-list ${className}`}>{
            feedback.map(dataItem => (
                    <li key={dataItem} className="horizontal-list__item" style={{color : colorIndicator(dataItem)}}>
                        {dataItem}
                    </li>
                )
            )
        }
        </ul>
    )
}

export default HorizontalList