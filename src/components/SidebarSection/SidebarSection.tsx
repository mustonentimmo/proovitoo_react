import React from "react";
import "./SidebarSection.scss";

interface SidebarSectionProps {
    header: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = (props) => (
    <section className="sidebar-section">
        <div className="sidebar-section__header">
            <h1 className="sidebar-section__title">
                {props.header}
            </h1>
        </div>
        <div className="sidebar-section__content">{props.children}</div>
    </section>
)

export default SidebarSection