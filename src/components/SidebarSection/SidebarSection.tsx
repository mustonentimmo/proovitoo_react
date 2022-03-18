import React from "react";
import "./SidebarSection.scss";

interface SidebarSectionProps {
    title: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = (props) => (
    <section className="sidebar-section">
        <div className="sidebar-section__header">
            <h1 className="sidebar-section__title">
                {props.title}
            </h1>
        </div>
        <div className="sidebar-section__content">{props.children}</div>
    </section>
)

export default SidebarSection