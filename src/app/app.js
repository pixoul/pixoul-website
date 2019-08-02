import React from "react"
import "./app.scss"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import LoadingScreen from "utils/loading/loading"
import NavigationMenu from "layout/navigation"
import Routes from "./routes"

function App(props) {

  return (
    <div>
      <Header />
        <LoadingScreen />
        <NavigationMenu />
        <Routes />
      <Footer />
    </div>
  );
}

export default App
