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
    showMenu: false,
    pageLoaded: true,
    autoScrolling: true,
    width: window.innerWidth,
  };

  setShowMenu = showMenu => {
    this.setState({ showMenu });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  onLeave = (origin, destination, direction) => {
    this.setState({ page: destination.index, pageLoaded: false });
  };

  onSlideLoad = (section, origin, destination, direction) => {
    this.setState({ pageLoaded: true });
  }

  onMenuButtonClicked = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  render() {
    const { showMenu, page, pageLoaded, autoScrolling, width } = this.state;
    const pageIndex = ["00", "01", "02", "03", "04", "05", "06", "Contact"];
    const labelTimeout = {
      appear: 900,
      enter: 1000,
      exit: 350,
    };

    const titleTimeout = {
      appear: 900,
      enter: 1250,
      exit: 300,
    };

    const subtitleTimeout={
      appear: 900,
      enter: 1850,
      exit: 900,
    };

    const tiltOption = {
      max: 15,
      scale: 1,
      reverse: true,
    };
    
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
            scrollingSpeed={500}
            autoScrolling={ autoScrolling }
            fitToSection={false}

            render={({ state, fullpageApi }) => {
              if(fullpageApi) {
                if(width > 1199 && !autoScrolling) {
                  this.setState({ autoScrolling: true }, () => {
                    fullpageApi.setAutoScrolling(true);
                  });
                }
                else if(width <= 1199 && autoScrolling) {
                  this.setState({ autoScrolling: false }, () => {
                    fullpageApi.setAutoScrolling(false);
                  });
                }
              }
              
              return (
                <ReactFullpage.Wrapper>
                  <div className="section" id="first">
                    <img src={bgImage} alt="bgImage" className="bg-image" />
                    <div className="first-content">
                      <div className="first-content__wrapper">
                        <CSSTransition
                          in={page === 0 && pageLoaded && width > 1199}
                          timeout={{
                            appear: 900,
                            enter: 1650,
                            exit: 750,
                          }}
                          classNames="mainTitle-animation"
                        >
                          <div className="first-title mainTitle-animation-enter">
                            Pixoul
                            <br />
                            Agency & Consultancy
                            <div className="blue_line_under_title" />
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 0 && pageLoaded && width > 1199}
                          timeout={{
                            appear: 900,
                            enter: 1650,
                            exit: 750,
                          }}
                          classNames="mainText-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="first-description mainText-animation-enter">
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
                        in={page === 1 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Corporate Site</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title" id="title-01">
                          IKAR<span className="lucida-title">Ū</span>S
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg01} alt="bg01" id="bg01" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    <span className="watermark">01</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-02">
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Enterprise System</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">
                          <img src={fusemap} alt="fusemap" />
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg02} alt="bg02" id="bg02" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    
                    <span className="watermark">02</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-03">
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Dashboard Matrix</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">hcp</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg03} alt="bg03" id="bg03" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    <span className="watermark">03</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-04">
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Mobile App</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <div className="title">Swank<div className="description">loans & financing</div></div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg04} alt="bg04" id="bg04" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    <span className="watermark">04</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-05">
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">Mobile App</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">MODA</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg05} alt="bg05" id="bg05" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    <span className="watermark">05</span>
                  </div>
                  <div className="section">
                    <div className="content" id="content-06">
                      <CSSTransition
                        in={page === 6 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="label">E-Commerce Site</span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 6 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                        onExited={() => {}}
                      >
                        <span className="title">
                          <img src={artisanLogo} alt="artisan" />
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 6 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
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
                      options={tiltOption}
                    >
                      <img src={bg06} alt="bg06" id="bg06" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore />
                      </div>
                    </Tilt>
                    <span className="watermark">06</span>
                  </div>
                  <div className="section">
                    <PixoulContactForm
                      heading="Let's get to work."
                      isVisible={page === 7 && width > 1199}
                    />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
          <PageIndex
            style={{ right: 44, bottom: -167 }}
            selected={pageIndex[this.state.page]}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default App;
