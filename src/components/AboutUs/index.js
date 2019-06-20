import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PixoulContactForm from "../ContactForm/index";
import downArrow from "../../images/ic_arrow_forward.png";
import { CSSTransition } from "react-transition-group";
import "./about-us.css";

import spaceship from "../../images/spaceship.png";
import people from "../../images/people.png";
import cloud from "../../images/cloud.png";
import thumbsup from "../../images/thumbsup.png";
import map from "../../images/map.svg";

class AboutUsPage extends React.Component {
  state = {
    page: 0,
    showMenu: false,
    pageLoaded: true,
    width: window.innerWidth
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

  render() {
    const { page, pageLoaded, width } = this.state;
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
      enter: 2750,
      exit: 50,
    };

    return (
      <div className="about-us-page">
        <ReactFullpage
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          autoScrolling={false}
          fitToSection={false}
          render={({ state, fullpageApi }) => {

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="">
                      <div className="green_heading top_about_us_heading mainTitle-animation-enter">
                        How can we help?
                      </div>
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        We’re here to bring life to your digital<br/>
                        &nbsp;vision. Got a project in mind?<br/>
                        &nbsp;Let's talk.
                      </div>
                  </div>

                  <button
                    onClick={() => fullpageApi.moveSectionDown()}
                    className="page_down_button_centered pixoul_button"
                  >
                    <img src={downArrow} alt="downArrow" />
                  </button>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199}
                  timeout={titleTimeout}
                  classNames="about-title-animation"
                  onEnter={() => {}}
                  onExited={() => {}}
                >
                  <h1>What we value.</h1>
                </CSSTransition>
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199}
                  timeout={{
                    appear: 900,
                    enter: 1950,
                    exit: 50,
                  }}
                  classNames="about-text-animation"
                  onEnter={() => {}}
                  onExited={() => {}}
                >
                  <h2>
                    Our design-centric approach means our products focus on real data and business
                    <br />
                    &nbsp;goals, bringing value and creativity into every solution.
                  </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_four_grid">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199}
                    timeout={textTimeout}
                    classNames="about-title-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className="pixoul_four_grid_item">
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={spaceship} alt="Spaceship" />
                      </div>
                      <h3 className="blue_heading">We strive for innovation.</h3>
                      <h4>
                        We make useful, long-lasting products that set the industry standard.
                      </h4>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199}
                    timeout={titleTimeout}
                    classNames="about-title-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className="pixoul_four_grid_item">
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={people} alt="People" />
                      </div>
                      <h3 className="blue_heading">You're our first priority.</h3>
                      <h4>
                        Our main goal always lies at the intersection of your user's
                        needs and your business' goals.
                      </h4>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className="pixoul_four_grid_item">
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={cloud} alt="Cloud data" />
                      </div>
                      <h3 className="blue_heading">Solutions should be simple.</h3>
                      <h4>
                        Our work will bring about novel, custom solutions to fit your
                        unique objectives.
                      </h4>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className="pixoul_four_grid_item">
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={thumbsup} alt="Thumbs up" />
                      </div>
                      <h3 className="blue_heading">Good design is minimal design.</h3>
                      <h4>
                        We craft with a purposeful, simple, and minimal design
                        aesthetic.
                      </h4>
                    </div>
                  </CSSTransition>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199}
                      timeout={titleTimeout}
                      classNames="about-title-animation"
                      onEnter={() => {}}
                      onExited={() => {}}
                    >
                    <h1>Our partner network.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199}
                      timeout={textTimeout}
                      classNames="about-text-animation"
                      onEnter={() => {}}
                      onExited={() => {}}
                  >
                    <h2>
                      Headquartered in Dallas, we're a global network with team members across North America, and clients around the world.
                    </h2>
                  </CSSTransition>
                </div>
                <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199}
                    timeout={imgTimeout}
                    classNames="about-image-animation"
                >
                  <div className="about-map-row">
                    <img src={map} alt="map" />
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={page === 2 && pageLoaded && width > 1199}
                  timeout={imgTimeout}
                  classNames="about-image-animation"
                >
                <div className="pixoul_button_section">
                  <button className="green_button pixoul_button">Recent Work</button>
                </div>
                </CSSTransition>
              </div>
              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={width > 1199 && page === 3 && pageLoaded}
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

export default AboutUsPage;
