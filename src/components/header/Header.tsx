import React from "react";
import Logo from "../../resources/logos/finaleLogo.001.png";
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { IconContext } from "@react-icons/all-files";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
class IconElement extends React.Component <any, any> {
    render() {
        return (
            <div className={this.props.classname} >
               <IconContext.Provider value={{size:"75%", color: "black", className: "global-class-name" }}>
                    <div className="header-icons">
                        <MdEmail />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{size:"75%", color: "black", className: "global-class-name" }}>
                    <div className="header-icons">
                        <SiGithub />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{size:"75%", color: "black", className: "global-class-name" }}>
                    <div className="header-icons">
                        <SiLinkedin />
                    </div>
                </IconContext.Provider>
            </div>
        );
    }
}

class HeaderElement extends React.Component <any, any> {
    render() {
        return (
            <div className={this.props.classname}>
                <a>{this.props.name}</a>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header-main">
                    <div className="header-left">
                        <img className="app-logo" src={ Logo } alt="logo"/>
                    </div>
                    <div className="header-middle">
                        <HeaderElement classname="header-menu-item" name="About" />
                        <HeaderElement classname="header-menu-item" name="Skills" />
                        <HeaderElement classname="header-menu-item" name="Experience" />
                        <HeaderElement classname="header-menu-item" name="Education" />
                        <HeaderElement classname="header-menu-item" name="Projects" />
                        <HeaderElement classname="header-menu-item" name="Certifications" />
                    </div>
                    <div className="header-right">
                        <IconElement classname="header-icon-div"/>

                    </div>
                </div>
            </>
        );
    }
}

export default Header;