import React from 'react';
import "./Date.scss";

interface DateProps {
    info?: string;
}

const Date: React.FC<DateProps> = ({ info }) => (
    <div className="date">{info}</div>
)

export default Date