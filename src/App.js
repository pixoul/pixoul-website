import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Tilt from "react-tilt";
import { CSSTransition } from "react-transition-group";

import PixoulContactForm from "./components/ContactForm/index";
import "./App.css";
import bgImage from "./images/bg.png";

import { Header, LearnMore, PageIndex, Menu } from "./components";

import bg01 from "./images/bg01.png";
import bg02 from "./images/bg02.png";
import bg03 from "./images/bg03.png";
import bg04 from "./images/bg04.png";
import bg05 from "./images/bg05.png";
import bg06 from "./images/bg06.png";
import fusemap from "./images/fusemap.png";
import downArrow from "./images/ic_arrow_forward.png";
import artisanLogo from "./images/artisanLogo.png";

const cn = require('classnames');
class App extends React.Component {
  state = {
    page: 0,
    showMenu: false,
    pageLoaded: false,
    autoScrolling: true,
    width: window.innerWidth,
    readyToMove: true,
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

  onLeave = (origin, destination, direction) => {
    this.setState({ page: destination.index, pageLoaded: false, readyToMove: false });
  };

  onSlideLoad = (section, origin, origindestination, direction) => {
    this.setState({ pageLoaded: true  });
    if(origin.index === 7 || origin.index === 0) {
      this.setState({ readyToMove: true });
    }
  };

  toggleMenu = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  render() {
    const { readyToMove, showMenu, page, pageLoaded, autoScrolling, width } = this.state;
    
    const pageIndex = ["00", "01", "02", "03", "04", "05", "06", "Contact"];
    const labelTimeout = {
      appear: 900,
      enter: 1000,
      exit: 350
    };

    const titleTimeout = {
      appear: 900,
      enter: 1250,
      exit: 300
    };

    const subtitleTimeout = {
      appear: 900,
      enter: 1850,
      exit: 900
    };

    const tiltOption = {
      max: 9,
      scale: 1,
      reverse: true
    };

    const sectionClass = cn('', {
      'no-pointer': showMenu
    });

    const mainClass = cn('main', {
      'main__exited': showMenu,
      'main-enter': !showMenu,
    });

    return (
      <div>
        <Menu isVisible={showMenu} onMenuClose={this.toggleMenu} />
          <div className={mainClass}>
            <Header
              onMenuClick={this.toggleMenu}
              isAnimated={width > 1199}
              isHome={true}
            />
            
            {
              page < 7 && page > 0 && 
                <span className="watermark">
                  <span className="num">{pageIndex[page]}</span>
                </span>
            }
            <div className={sectionClass}>
            <ReactFullpage
              onLeave={this.onLeave}
              afterLoad={this.onSlideLoad}
              onResize={this.updateWindowDimensions}
              scrollingSpeed={500}
              recordHistory={false}
              autoScrolling={autoScrolling}
              fitToSection={false}
              render={({ state, fullpageApi }) => {
                if (fullpageApi) {
                  fullpageApi.setAllowScrolling(readyToMove || width <= 1199);
                  if (width > 1199 && !autoScrolling) {
                    this.setState({ autoScrolling: true }, () => {
                      fullpageApi.setAutoScrolling(true);
                    });
                  } else if (width <= 1199 && autoScrolling) {
                    this.setState({ autoScrolling: false }, () => {
                      fullpageApi.setAutoScrolling(false);
                    });
                  }
                }

                return (
                  <ReactFullpage.Wrapper>
                    <div className="section" id="first">
                      <img data-src={bgImage} alt="bgImage" className="bg-image" />
                      <div className="first-content">
                        <div className="first-content__wrapper">
                          <div className="first-title">
                            Pixoul&nbsp;
                            <br className="keep_visible_on_mobile" />
                            Agency & Consultancy
                            <div className="blue_line_under_title landing-page-blue-line-animation" />
                          </div>
                          <div className="first-description">
                            We’re a UX design agency, full-stack&nbsp;
                            <br />
                            development shop, and strategic&nbsp;
                            <br />
                            consulting group—ready to bring your&nbsp;
                            <br />
                            digital vision to life.
                          </div>
                        </div>

                        <button
                          className="pixoul_button landing-page-button landing-page-button-animation"
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
                          <div className="label">Corporate Site</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 1 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title" id="title-01">
                            IKAR<span className="lucida-title">Ū</span>S
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 1 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is redefining the business
                            <br /> marketplace.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg01} alt="bg01" id="bg01" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
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
                          <div className="label">Enterprise System</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title">
                            <img src={fusemap} alt="fusemap" />
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is thinking smarter about how <br />
                            we power the world.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg02} alt="bg02" id="bg02" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
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
                          <div className="label">Dashboard Matrix</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 3 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title">hcp</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 3 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is setting the standard in <br />
                            healthcare—literally.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg03} alt="bg03" id="bg03" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
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
                          <div className="label">Mobile App</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 4 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title">
                            Swank
                            <div className="description">loans & financing</div>
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 4 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is financing the future of
                            <br />
                            personal banking loans.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg04} alt="bg04" id="bg04" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
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
                          <div className="label">Mobile App</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 5 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title">MODA</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 5 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is reworking your wardrobe, one
                            <br />
                            piece at a time.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg05} alt="bg05" id="bg05" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
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
                          <div className="label">E-Commerce Site</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 6 && pageLoaded && width > 1199}
                          timeout={titleTimeout}
                          classNames="title-animation"
                          onEnter={() => {}}
                          onExited={() => {}}
                        >
                          <div className="title">
                            <img src={artisanLogo} alt="artisan" />
                          </div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 6 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                          onExited={() => {}}
                        >
                          <div className="subtitle">
                            is making a treat of wholesale
                            <br />
                            subscriptions.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg06} alt="bg06" id="bg06" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore />
                        </div>
                      </Tilt>
                    </div>
                    <div className="section">
                      <PixoulContactForm
                        heading="Let's get to work."
                        isAnimated={page === 7 && width > 1199 && pageLoaded}
                      />
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
            </div>
            <PageIndex
              style={{ right: 44, bottom: -167 }}
              selected={pageIndex[this.state.page]}
            />
          </div>

          <div>
        </div>
      </div>
    );
  }
}

export default App;
