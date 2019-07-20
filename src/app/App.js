import React from "react";
import Header from "app/Header"
import SideMenu from "app/SideMenu"
import Home from "home/Home"

class App extends React.Component {
  render() {
    return (
      <div>
        <SideMenu />
        <Home />
      </div>
    );
  }
}

export default App;
