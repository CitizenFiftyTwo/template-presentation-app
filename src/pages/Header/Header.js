import React from "react";

class Header extends React.Component {

    scrollToPageOne() {
        document.getElementById('pageOne').scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <nav className="navbar">
                <a href="home">Home</a>
                <a onClick={this.scrollToPageOne}>Page One</a>
                <a href="pageTwo">Page Two</a>
            </nav>
        );
    }
}

export default Header;