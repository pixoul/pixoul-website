import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';

import { CSSTransition } from "react-transition-group";
import "./products.css";

import buttonX from "../../images/buttonX.svg";

const cn = require('classnames');
class ProductsPage extends React.Component {
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
    const pageIndex = ["00", "01"];
    const { page, pageLoaded, width, progress } = this.state;
    const { isMenuVisible } = this.props;
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
    
    return (
      <div className="products-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          recordHistory={false}
          autoScrolling={isMenuVisible}
          allowScrolling={!isMenuVisible}
          fitToSection={true}
          render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                    <div className="green_heading top_about_us_heading mainTitle-animation-enter">
                      Complex problems deserve elegant solutions.
                    </div>
                    <div className="top_about_us_heading_text mainText-animation-enter">
                      We help brands and organizations succeed in the digital age.
                    </div>
                </div>
                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className="page_down_button_centered pixoul_button about-page-button-animation"
                >
                  <img src={buttonX} alt="buttonX" />
                </button>
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
                    <h1 className={progress >= 1 || width <= 1199 ? 'about-title-animation-enter-done' : ''}>
                      Who we are
                    </h1>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={titleTimeout}
                    classNames="about-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(2)}}
                  >
                    <h2 className={progress >= 1 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                      Pixoul is a human-centered design agency and consultancy that helps businesses find their voice in the digital space. Our partners trust us to provide them with exceptional digital products based on the foundations of Design Thinking to achieve business goals and affect bottom lines.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_section_heading">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 3}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onExited={() => {this.setProgress(3)}}
                  >
                    <h2 className={progress >= 1 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                      Our partners enjoy:
                    </h2>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 4}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onExited={() => {this.setProgress(4)}}
                  >
                    <div className="number-section">
                      <div className="number-item">
                        <div className="number blue_heading">
                          219%
                        </div>
                        <p>
                          outperformance vs. design averse companies
                        </p>
                       
                      </div>
                      <div className="number-item">
                        <div className="number blue_heading">
                          $250M +
                        </div>
                        <p>
                          in collective designed product value
                        </p>
                       
                      </div>
                      <div className="number-item">
                        <div className="number blue_heading">
                          10x
                        </div>
                        <p>
                          increased product performance
                        </p>
                       
                      </div>
                    </div>
                  </CSSTransition>
                </div>
              </div>
            </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default ProductsPage;
