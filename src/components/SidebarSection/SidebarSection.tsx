import React from "react";
import "./SidebarSection.scss";

const SidebarSection = (props) => (
    <section className="sidebar-section">
        <div className="sidebar-section__header">{props.header}</div>
        <div className="sidebar-section__content">{props.children}</div>
    </section>
)

export default SidebarSection