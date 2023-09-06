import React from 'react';
import './Navbar.css';
import SEO from "../../SEO";

const Navbar = () => {
    return (
        <nav className="todo-nav">
            <SEO
                title="Navigation Bar file of Schoolinka Todo"
                description="This is Schoolinka Todo App Navigation Bar"
                keywords={["todo", "todoapp", "todos"]}
                image="./images/ContentLogo.png"
                url="https://"
            />
            <div className="logo">
                <div className="mobile-nav">
                    <img className="logo-mobile" src="/images/ContentLogo.png" alt="logo" />
                    <img src="/images/Content.png" alt="logo" />
                </div>
                <img src="/images/mobile-menu.png" className="mobile-menu-nav" alt="logo" />
            </div>

            <div className="nav-menu">
                <div className="nav-button-card">
                    <img src="/images/Icon.png" alt="settings-button" />
                </div>
                <div className="nav-button-card">
                    <img src="/images/Icon.svg" alt="notifications-button" />
                </div>
                <div className="nav-profile-img">
                    <img src="/images/Avatar.png" alt="profile-img" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
