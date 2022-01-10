import React from 'react';
import "./HorizontalList.scss"

interface HorizontalListProps {
    feedback: string[];
    className?: string;
}

const HorizontalList: React.FC<HorizontalListProps> = ({feedback, className}) => (
    <ul className={`horizontal-list ${className}`}>{
      feedback.map(dataItem => (
            <li key={dataItem} className="horizontal-list__item">
                {dataItem}
            </li>
            )
        )
    }
    </ul>
)

export default HorizontalList