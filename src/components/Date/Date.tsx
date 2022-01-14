import React from 'react';
import "./Date.scss";

interface DateProps {
    date?: string;
}

const Date: React.FC<DateProps> = ({ date }) => {

    const colors = ["#fcd3d4", "#a0f4dc", "#f9d371", "#93ffd8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const addLinebreak = (str?: string) => {
        return str ? str.replace(" ", "\n") : "";
    }

return (
    <div className="date" style={{borderColor : randomColor}}>{addLinebreak(date)}</div>
    )
}

export default Date