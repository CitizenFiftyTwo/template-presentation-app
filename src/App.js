import React from "react";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";
import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Home />
        <PageOne />
        <PageTwo />
      </div>
    );
  }

}

export default App;
