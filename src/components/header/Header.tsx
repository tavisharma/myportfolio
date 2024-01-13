import React from "react";
import Logo from "../../resources/logos/finaleLogo.001.png"

class Header extends React.Component {
    render() {
        return (<>
            <div className="header-main">
                <div className="header-left">
                    <img className="app-logo" src={ Logo } alt="logo"/>
                </div>
                <div className="header-middle">
                </div>
                <div className="header-right">
                </div>
            </div>
        </>);
    }
}

export default Header;