import React from "react";
import "./Sidebar.scss";

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = (props) => (
    <aside className="sidebar">
        {props.children}
    </aside>
);

export default Sidebar;