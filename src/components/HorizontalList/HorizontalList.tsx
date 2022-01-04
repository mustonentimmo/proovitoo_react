import React from 'react';
import "./HorizontalList.scss"

interface HorizontalListProps {
    feedback: string[];
}

const HorizontalList: React.FC<HorizontalListProps> = (props) => (
    <ul className="horizontal-list">{
        props.feedback.map(dataItem => (
            <li key={dataItem} className="horizontal-list__item">
                {dataItem}
            </li>
            )
        )
    }
    </ul>
)

export default HorizontalList