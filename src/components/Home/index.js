import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Tilt from "react-tilt";
import { CSSTransition } from "react-transition-group";

import PixoulContactForm from "../ContactForm/index";
import "./home.css";

import LearnMore from "../LearnMore/index";
import { PageIndex } from "../PageIndex";

import bg01 from "../../images/bg01.png";
import bg02 from "../../images/bg02.png";
import bg03 from "../../images/bg03.png";
import bg04 from "../../images/bg04.png";
import bg05 from "../../images/bg05.png";
import bg06 from "../../images/bg06.png";
import fusemap from "../../images/fusemap.png";

import downArrow from "../../images/ic_arrow_forward.png";
import ikarus_black from "../../images/ikarus-black.svg";
import hcp from "../../images/hcp.svg";
import bgImage from "../../images/bg.png";
import iuzeit from "../../images/iuzeit.svg";
import stallion from "../../images/stallion.svg";
import georgia_pacific from "../../images/georgia-pacific.svg";

class Home extends React.Component {
  state = {
    page: 0,
    pageLoaded: false,
    autoScrolling: true,
    readyToMove: true,
    width: window.innerWidth,
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

  render() {
    const { readyToMove, page, pageLoaded, autoScrolling, width } = this.state;
    const { isMenuVisible } = this.props;
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

    return (
      <div className="home-page">
        {
          page < 7 && page > 0 && 
            <span className="watermark">
              <span className="num">{pageIndex[page]}</span>
            </span>
        }
        <div className="section">
          <ReactFullpage
            anchors={pageIndex}
            onLeave={this.onLeave}
            afterLoad={this.onSlideLoad}
            scrollingSpeed={500}
            allowScrolling={!isMenuVisible}
            recordHistory={false}
            autoScrolling={autoScrolling}
            fitToSection={false}
            render={({ state, fullpageApi }) => {
              if (fullpageApi) {
                fullpageApi.setAllowScrolling((readyToMove || width <= 1199) && !isMenuVisible);
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
                      >
                        <div className="label">E-Commerce Site</div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                      >
                        <div className="title" id="title-01">
                          <img src={iuzeit} alt="iuzeit" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 1 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is shaping the future of the
                          <br /> online purchase journey.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg01} alt="bg01" id="bg01" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/01' />
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
                      >
                        <div className="label">Kiosk Interface</div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                        onEnter={() => {}}
                      >
                        <div className="title" id="title-02">
                          <img src={georgia_pacific} alt="georgia_pacific" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is shaping the future of the
                          <br /> online purchase journey.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg02} alt="bg08" id="bg02" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/02' />
                      </div>
                    </Tilt>
                  </div>
                  
                  <div className="section">
                    <div className="content" id="content-03">
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                      >
                        <div className="label">Analytics Dashboard</div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                      >
                        <div className="title">
                          <img src={stallion} alt="stallion" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 3 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is taking field analytics to a 
                          <br />
                          whole new level.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg03} alt="bg03" id="bg03" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/03' />
                      </div>
                    </Tilt>
                  </div>
                  <div className="section">
                    <div className="content" id="content-04">
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                      >
                        <div className="label">Enterprise System</div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                      >
                        <div className="title">
                          <img src={fusemap} alt="fusemap" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 4 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is thinking smarter about how <br />
                          we power the world.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg04} alt="bg04" id="bg04" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/04' />
                      </div>
                    </Tilt>
                  </div>
                  <div className="section">
                    <div className="content" id="content-05">
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
                      >
                        <div className="label">Dashboard Matrix</div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={titleTimeout}
                        classNames="title-animation"
                      >
                        <div className="title">
                          <img src={hcp} alt="hcp" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 5 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is setting the standard in <br />
                          healthcare—l iterally.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg05} alt="bg05" id="bg05" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/05' />
                      </div>
                    </Tilt>
                  </div>
                  
                  <div className="section">
                    <div className="content" id="content-06">
                      <CSSTransition
                        in={page === 6 && pageLoaded && width > 1199}
                        timeout={labelTimeout}
                        classNames="label-animation"
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
                          <img src={ikarus_black} alt="ikarus" />
                        </div>
                      </CSSTransition>
                      <CSSTransition
                        in={page === 6 && pageLoaded && width > 1199}
                        timeout={subtitleTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ readyToMove: true })}
                      >
                        <div className="subtitle">
                          is redefining the business
                          <br />
                          marketplace.
                        </div>
                      </CSSTransition>
                    </div>
                    <Tilt className="Tilt" options={tiltOption}>
                      <img src={bg06} alt="bg06" id="bg06" className="bg-img" />
                      <div className="Tilt-inner">
                        <LearnMore link='products/06' />
                      </div>
                    </Tilt>
                  </div>
                  <div className="section">
                    <PixoulContactForm
                      heading="Contact us."
                      delay={900}
                      isAnimated={page === 7 && width > 1199 && pageLoaded}
                    />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
        <PageIndex
          style={{ right: 44 }}
          selected={pageIndex[this.state.page]}
        />
      </div>
    );
  }
}

export default Home;
