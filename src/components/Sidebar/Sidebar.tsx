import React from "react";
import "./Sidebar.scss";

const Sidebar = (props) => (
    <aside className="sidebar">
        {props.children}
    </aside>
);

export default Sidebar;