import React from "react";
import { Menu } from "antd";
import "./Navbar.scss";
import { HamburgerIcon } from "../../assets/navbar/Icons";

function Navbar() {
    return (
        <header className="navbar">
            <Menu mode="horizontal" className="menu" overflowedIndicator={<HamburgerIcon />} triggerSubMenuAction="click">
                <Menu.Item key="about">
                    <h1 className="menu-title">About <span className="special-text">Me</span></h1>
                </Menu.Item>
                <Menu.Item key="projects">
                    <h1 className="menu-title">Projects <span className="special-text">Made</span> </h1>
                </Menu.Item>
                <Menu.Item key="contact">
                    <h1 className="menu-title">Contact <span className="special-text">Me</span></h1>
                </Menu.Item>
            </Menu>
        </header>
    )
}

export default Navbar;