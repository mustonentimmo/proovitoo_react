import React from 'react';
import "./Avatar.scss"

interface AvatarProps {
    imgUrl?: string
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => (
    <div className="avatar">
        <img src={imgUrl} alt=""/>
    </div>
)

export default Avatar