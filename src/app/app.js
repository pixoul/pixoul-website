import React, { Suspense } from "react"
import "./app.scss"

import LoadingScreen from "utils/loading/loading"

const Header = React.lazy(() => import("layout/header/header"))
const Footer = React.lazy(() => import("layout/footer/footer"))
const Routes = React.lazy(() => import("app/routes"))

function App(props) {

  return (
    <div>
      <Suspense fallback={<div className="loading"  />}>
        <Header />
        <LoadingScreen watchRoutes />
        <Routes />
        <Footer />
     </Suspense>
    </div>
  );
}

export default App
