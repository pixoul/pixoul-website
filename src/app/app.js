import React, { useEffect, Suspense } from "react"
import "./app.scss"
import chat from 'app/chat';

import ScrollRestoration from "utils/scroll-restoration/scroll-restoration"
const Header = React.lazy(() => import("layout/header/header"))
const Footer = React.lazy(() => import("layout/footer/footer"))
const Routes = React.lazy(() => import("app/routes"))

function App(props) {

  useEffect(() => {
    chat.init();
  }, []);

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
