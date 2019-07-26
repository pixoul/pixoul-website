import React from "react"
import "./app.scss"

import SideMenu from "layout/side-menu/side-menu"
import Routes from "./routes"

function App(props) {

  return (
    <div>
      <SideMenu>
          <Routes />
      </SideMenu>
    </div>
  );
}

export default App
