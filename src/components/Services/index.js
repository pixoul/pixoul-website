import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import PixoulContactForm from "../ContactForm/index";
import downArrow from "../../images/ic_arrow_forward.png";

import "./services.css";

import computer from "../../images/computer.png";
import web_programming from "../../images/web-programming.png";
import lightbulb from "../../images/lightbulb.png";

import map from "../../images/map.svg";
const cn = require('classnames');
class ServicesPage extends React.Component {
  state = {
    page: 0,
    showMenu: false,
    pageLoaded: true,
    progress: 0,
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
    this.setState({ page: destination.index, pageLoaded: false });
  };

  onSlideLoad = (section, origin, destination, direction) => {
    this.setState({ pageLoaded: true });
  };

  setProgress = (newProgress) => {
    const { progress } = this.state;
    if(newProgress > progress) {
      this.setState({ progress: newProgress });
    }
  }

  render() {
    const pageIndex = ["00", "01", "02", "Contact"];
    const { page, pageLoaded, width, progress } = this.state;
    const titleTimeout = {
      appear: 900,
      enter: 1950,
      exit: 50,
    };

    const textTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };
    
    const imgTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };

    const gridClass = cn('pixoul_grid_column_item', {
      'about-text-animation-enter-done': progress >= 1 || width <= 1199,
    });

    const mapClass = cn('about-map-row', {
      'about-image-animation-enter-done': progress >= 5 || width <= 1199,
    });

    const buttonClass = cn('pixoul_button_section', {
      'about-image-animation-enter-done': progress >= 5 || width <= 1199,
    });

    return (
      <div className="about-us-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          autoScrolling={false}
          fitToSection={false}
          bigSectionsDestination={'top'}
          render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="">
                      <div className="blue_heading top_about_us_heading mainTitle-animation-enter">
                        Complex problems deserve elegant solutions
                      </div>
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        We help brands and organizations&nbsp;<br/>
                        succeed in the digital age.
                      </div>
                  </div>

                  <button
                    onClick={() => fullpageApi.moveSectionDown()}
                    className="page_down_button_centered pixoul_button about-page-button-animation"
                  >
                    <img src={downArrow} alt="downArrow" />
                  </button>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 1}
                  timeout={titleTimeout}
                  classNames="about-title-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(1)}}
                >
                  <h1 className={progress >= 1 ? 'about-title-animation-enter-done' : ''}>
                    What we do.
                  </h1>
                </CSSTransition>
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                  timeout={textTimeout}
                  classNames="about-text-animation"
                  onEnter={() => {}}
                  onExited={() => {}}
                >
                  <h2 className={progress >= 1 ? 'about-text-animation-enter-done' : ''}>
                    We'll work with you to find solutions to your most complex challenges.
                  </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_grid_column">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={lightbulb} alt="lightbulb" />
                      </div>
                      <div>
                        <h2>Strategy</h2>
                        <h3>
                          Capitalize on business opportunity by developing a harmonized digital strategy and transforming your organization.
                        </h3>
                      </div>
                      <div>

                      </div>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={titleTimeout}
                    classNames="about-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={computer} alt="computer" />
                      </div>
                      <div>
                        <h2>Design</h2>
                        <h3>
                          Deliver a world-class experience to your customer through the application of Design Thinking.
                        </h3>
                      </div>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={web_programming} alt="Web programming" />
                      </div>
                      <div>
                        <h2>Technology</h2>
                        <h3>
                          Bring a vision to life and into the hands of your customers, wherever they may be.
                        </h3>
                      </div>
                    </div>
                  </CSSTransition>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199 && progress <3}
                      timeout={titleTimeout}
                      classNames="about-title-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(3)}}
                    >
                    <h1 className={progress >= 3 ? 'about-title-animation-enter-done' : ''}>Where we work.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199 && progress < 4}
                      timeout={textTimeout}
                      classNames="about-text-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(4)}}
                  >
                    <h2 className={progress >= 4 ? 'about-text-animation-enter-done' : ''}>
                      From venture-backed startups to Fortune 500 corporations, we build solutions for our partners across a variety of industries. Here's just a few.
                    </h2>
                  </CSSTransition>
                </div>
                <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                    timeout={imgTimeout}
                    classNames="about-image-animation"
                >
                  <div className={mapClass}>
                    <img src={map} alt="map" />
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                  timeout={imgTimeout}
                  classNames="about-image-animation"
                  onExited={() => this.setProgress(5)}
                >
                  <div className={buttonClass}>
                    <button className="green_button pixoul_button">Recent Work</button>
                  </div>
                </CSSTransition>
              </div>
              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={width > 1199 && page === 3 && pageLoaded && progress <= 6}
                  onExited={() => this.setProgress(6)}
                />
              </div>

            </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default ServicesPage;
