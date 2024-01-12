import React from "react";
import Logo from "../../resources/logos/logo.png"

class Header extends React.Component {
    render() {
        return (<>
            <div className="header-main">
                <img className="app-logo" src={ Logo } alt="logo" />
            </div>
        </>);
    }
}

export default Header;