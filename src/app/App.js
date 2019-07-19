import React from "react";
import Header from "app/Header"
import Home from "home/Home"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
