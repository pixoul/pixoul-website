import React, { Fragment } from "react";
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
    showMenu: false,
    pageLoaded: true,
  };

  setShowMenu = showMenu => {
    this.setState({ showMenu });
  };

  onLeave = (origin, destination, direction) => {

    this.setState({ page: destination.index, pageLoaded: false });
    console.log('leave')
  };

  onSlideLoad = (section, origin, destination, direction) => {
    console.log('loaded');
    this.setState({ pageLoaded: true });
  }

  onMenuButtonClicked = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  render() {
    const { showMenu, page, pageLoaded } = this.state;
    console.log('page loaded---', pageLoaded);
    console.log('page--', page);
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
          <ReactFullpage
            anchors={pageIndex}
            onLeave={this.onLeave}
            afterLoad={this.onSlideLoad}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section" id="first">
                    <img src={bgImage} alt="bgImage" className="bg-image" />
                    <div className="first-content">
                      <div className="first-content__wrapper">
                        <CSSTransition
                          in={page === 0}
                   
                          classNames="mainTitle-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="first-title mainTitle-animation-enter">
                            Pixoul
                            <br />
                            Agency & Consultancy
                            <div className="blue_line_under_title" />
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 0}
                          timeout={1000}
                          classNames="subtitle-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="first-description subtitle-animation-enter">
                            We’re a UX design agency, full-stack<br/>development shop,
                            and strategic<br/>consulting group—ready to bring your<br/>
                            digital vision to life.
                          </div>
                        </CSSTransition>
                      </div>
 
                      <button
                        className="pixoul_button"
                        style={{width: 0}}
                        onClick={() => fullpageApi.moveSectionDown()}
                      >
                        <img src={downArrow} alt="downArrow" />
                      </button>

                    </div>
                  </div>
                  <div className="section">
                    <div className="content" id="content-01">
                      <CSSTransition
                        in={page === 1 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Corporate Site</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title" id="title-01">
                          IKAR<span className="lucida-title">Ū</span>S
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is redefining the business<br/> marketplace.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg01} alt="bg01" id="bg01" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">01</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-02">
                      <CSSTransition
                        in={page === 2 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Enterprise System</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">
                          <img src={fusemap} alt="fusemap" />
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is thinking smarter about how <br/>we power the world.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg02} alt="bg02" id="bg02" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">02</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-03">
                      <CSSTransition
                        in={page === 3 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Dashboard Matrix</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">hcp</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is setting the standard in <br/>healthcare—literally.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg03} alt="bg03" id="bg03" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">03</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-04">
                      <CSSTransition
                        in={page === 4 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Mobile App</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <div className="title">Swank<div className="description">loans & financing</div></div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is financing the future of<br/>personal banking loans.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg04} alt="bg04" id="bg04" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">04</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-05">
                      <CSSTransition
                        in={page === 5 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Mobile App</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">MODA</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is reworking your wardrobe, one<br/>piece at a time.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg05} alt="bg05" id="bg05" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">05</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-06">
                      <CSSTransition
                        in={page === 6 && pageLoaded}
                        timeout={1000}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">E-Commerce Site</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 6 && pageLoaded}
                        timeout={1000}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">
                          <img src={artisanLogo} alt="artisan" />
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 6 && pageLoaded}
                        timeout={1000}
                        classNames="subtitle-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="subtitle">
                          is making a treat of wholesale<br/>subscriptions.
                        </span>
                      </CSSTransition>
                    </div>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 20,
                        scale: 1,
                        axis: "x"
                      }}
                    >
                      <img src={bg06} alt="bg06" id="bg06" className="bg-img" />
                      <LearnMore style={{ top: "212px", left: "32vw" }} />
                    </Tilt>
                    <span className="watermark">06</span>
                  </div>
                  <div className="section">
                    <PixoulContactForm heading="Let's get to work." />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
          <PageIndex
            style={{ right: 44, bottom: -267 }}
            selected={pageIndex[this.state.page]}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default App;
