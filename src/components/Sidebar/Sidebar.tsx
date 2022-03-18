import React from "react";
import "./Sidebar.scss";

const Sidebar: React.FC = (props) => (
    <aside className="sidebar">
        {props.children}
    </aside>
);

export default Sidebar;