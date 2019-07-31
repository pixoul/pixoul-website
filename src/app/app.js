import React from "react"
import "./app.scss"

import NavigationMenu from "layout/navigation"
import Routes from "./routes"

function App(props) {

  return (
    <div>
      <NavigationMenu />
      <Routes />
    </div>
  );
}

export default App
