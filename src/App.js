import React from "react";
import { CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";
import AboutUsPage from "./components/AboutUs/index";
import ServicesPage from "./components/Services/index";
import "./App.css";

import { Header, Menu, Home } from "./components";

const cn = require('classnames');
class App extends React.Component {
  state = {
    showMenu: false,
    width: window.innerWidth,
  };

  setShowMenu = showMenu => {
    this.setState({ showMenu });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleMenu = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  render() {
    const { showMenu, width } = this.state;

    const mainClass = cn('', {
      'main-exit-animation-enter-done': showMenu,
    });

    return (
      <div>
        <Menu isVisible={showMenu} onMenuClose={this.toggleMenu} />
        <CSSTransition
          in={showMenu}
          timeout={300}
          classNames="main-exit-animation"
        >
          <div className={mainClass}>
          <Header
            onMenuClick={this.toggleMenu}
            isAnimated={width > 1199}
            isHome={true}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Home} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/services" component={ServicesPage} />
          </div>
        </CSSTransition>

      </div>
    );
  }
}

export default App;
