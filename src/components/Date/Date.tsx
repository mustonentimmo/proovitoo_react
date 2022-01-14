import React from 'react';
import "./Date.scss";

interface DateProps {
    date?: string;
}

const Date: React.FC<DateProps> = ({ date }) => {

    const addLinebreak = (str?: string) => {
        return str ? str.replace(" ", "\n") : "";
    }

return (
    <div className="date">{addLinebreak(date)}</div>
    )
}

export default Date