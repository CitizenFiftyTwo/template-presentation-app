import React from "react";
import logo from "../../assets/logo.svg";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
