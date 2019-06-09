import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Tilt from "react-tilt";
import { CSSTransition } from "react-transition-group";
import PixoulContactForm from "./components/ContactForm/index";
import "./App.css";
import bgImage from "./images/bg.png";

import { Header, LearnMore, PageIndex } from "./components";

import bg01 from "./images/bg01.png";
import bg02 from "./images/bg02.png";
import bg03 from "./images/bg03.png";
import bg04 from "./images/bg04.png";
import bg05 from "./images/bg05.png";
import bg06 from "./images/bg06.png";
import fusemap from "./images/fusemap.png";
import downArrow from "./images/ic_arrow_forward.png";
import artisanLogo from "./images/artisanLogo.png";

class App extends React.Component {
  state = {
    page: 0,
    showMenu: false
  };

  setShowMenu = showMenu => {
    this.setState({ showMenu });
  };

  onLeave = (origin, destination, direction) => {
    this.setState({ page: destination.index });
  };

  onMenuButtonClicked = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  render() {
    const { showMenu } = this.state;
    const pageIndex = ["00", "01", "02", "03", "04", "05", "06", "Contact"];
    return (
      <CSSTransition
        in={!showMenu}
        timeout={1000}
        classNames="main"
        onEnter={() => {}}
        onExited={() => {}}
      >
        <div className={showMenu ? "main__exited" : ""}>
          <Header onMenuPressed={this.onMenuButtonClicked} />
          <PageIndex
            style={{ right: 44, bottom: 67 }}
            selected={pageIndex[this.state.page]}
          />
          <ReactFullpage
            onLeave={this.onLeave}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section" id="first">
                    <img src={bgImage} alt="bgImage" className="bg-image" />
                    <div className="first-content">
                      <div className="first-content__wrapper">
                        <div className="first-title">
                          Pixoul
                          <br />
                          Agency & Consultancy
                          <div className="blue_line_under_title" />
                        </div>
                        <div className="first-description">
                          We’re a UX design agency, full-stack development shop,
                          and strategic consulting group—ready to bring your
                          digital vision to life.
                        </div>
                      </div>
                      <button
                        className="pixoul_button"
                        onClick={() => fullpageApi.moveSectionDown()}
                      >
                        <img src={downArrow} alt="downArrow" />
                      </button>
                    </div>
                  </div>
                  <div className="section">
                    <div className="content" id="content-01">
                      <span className="label">Corporate Site</span>
                      <span className="title" id="title-01">
                        IKAR<span className="lucida-title">Ū</span>S
                      </span>
                      <span className="subtitle">
                        is redefining the business marketplace.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg01}
                        alt="bg01"
                        id="bg01"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">01</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-02">
                      <span className="label">Enterprise System</span>
                      <span className="title">
                        <img src={fusemap} alt="fusemap" />
                      </span>
                      <span className="subtitle">
                        is thinking smarter about how we power the world.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg02}
                        alt="bg02"
                        id="bg02"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">02</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-03">
                      <span className="label">Dashboard Matrix</span>
                      <span className="title">hcp</span>
                      <span className="subtitle">
                        is setting the standard in healthcare—literally.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg03}
                        alt="bg03"
                        id="bg03"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">03</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-04">
                      <span className="label">Mobile App</span>
                      <span className="title">Swank</span>
                      <span className="description">loans & financing</span>
                      <span className="subtitle">
                        is financing the future of personal banking loans.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg04}
                        alt="bg04"
                        id="bg04"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">04</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-05">
                      <span className="label">Mobile App</span>
                      <span className="title">MODA</span>
                      <span className="subtitle">
                        is reworking your wardrobe, one piece at a time.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg05}
                        alt="bg05"
                        id="bg05"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">05</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-06">
                      <span className="label">E-Commerce Site</span>
                      <span className="title">
                        <img src={artisanLogo} alt="artisan" />
                      </span>
                      <span className="subtitle">
                        is making a treat of wholesale subscriptions.
                      </span>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 15,
                        perspective: 8000,
                        scale: 1
                      }}
                    >
                      <img
                        src={bg06}
                        alt="bg06"
                        id="bg06"
                        className="Tilt-inner bg-img"
                      />
                    </Tilt>
                    <LearnMore style={{ bottom: "148px", left: "361px" }} />
                    <span className="watermark">06</span>
                  </div>
                  <div className="section">
                    <PixoulContactForm heading="Let's get to work." />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default App;
