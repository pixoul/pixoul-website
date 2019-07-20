import React from "react";
import Header from "common/Header/Header"
import SideMenu from "common/SideMenu/SideMenu"
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
