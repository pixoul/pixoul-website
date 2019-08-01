import React from "react"
import "./app.scss"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import NavigationMenu from "layout/navigation"
import Routes from "./routes"

function App(props) {

  return (
    <div>
      <Header />
        <NavigationMenu />
        <Routes />
      <Footer />
    </div>
  );
}

export default App
