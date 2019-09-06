import React, { Suspense } from "react"
import "./app.scss"

import ScrollRestoration from "utils/scroll-restoration/scroll-restoration"
const Header = React.lazy(() => import("layout/header/header"))
const Footer = React.lazy(() => import("layout/footer/footer"))
const Routes = React.lazy(() => import("app/routes"))

function App(props) {

  return (
    <ScrollRestoration>
      <Suspense fallback={<div className="loading"  />}>
        <Header />

        <main className="app-content">
          <Routes />
        </main>

        <Footer />
     </Suspense>
    </ScrollRestoration>
  );
}

export default App
