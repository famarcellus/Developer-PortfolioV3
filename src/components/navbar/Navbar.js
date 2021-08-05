import React from "react";
import { Menu } from "antd";
import "./Navbar.scss";
import { HamburgerIcon } from "../../assets/navbar/Icons";

function Navbar() {
    return (
        <header className="navbar" data-sal="slide-down" data-sal-duration="1500">
            <Menu mode="horizontal" className="menu" overflowedIndicator={<HamburgerIcon />} triggerSubMenuAction="click">
                <Menu.Item key="about">
                    <a href="#about" className="title-holder"><h1 className="menu-title">About <span className="special-text">Me</span></h1></a>
                </Menu.Item>
                <Menu.Item key="projects">
                    <a href="#projects" className="title-holder"><h1 className="menu-title">Projects <span className="special-text">Made</span></h1></a>
                </Menu.Item>
                <Menu.Item key="contact">
                    <a href="#contact" className="title-holder"><h1 className="menu-title">Contact <span className="special-text">Me</span></h1></a>
                </Menu.Item>
            </Menu>
        </header>
    )
}

export default Navbar;