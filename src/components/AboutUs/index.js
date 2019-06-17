import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PixoulContactForm from "../ContactForm/index";
import { CSSTransition } from "react-transition-group";
import downArrow from "../../images/ic_arrow_forward.png";
import "./about-us.css";
import { Header } from "../../components";

import spaceship from "../../images/spaceship.png";
import people from "../../images/people.png";
import cloud from "../../images/cloud.png";
import thumbsup from "../../images/thumbsup.png";
import alexadevices from "../../images/alexadevices.png";

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
    const pageIndex = ["00", "01", "02", "Contact"];
    return (
      <div className="about_us_page">
        <Header
          onMenuPressed={this.onMenuButtonClicked}
          isAnimated={width > 1199}
        />
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          touchSensitivity={10}
          autoScrolling={false}
          render={({ state, fullpageApi }) => {
            // if (fullpageApi) {
            //   if (width > 1199 && !autoScrolling) {
            //     this.setState({ autoScrolling: true }, () => {
            //       fullpageApi.setAutoScrolling(true);
            //     });
            //   } else if (width <= 1199 && autoScrolling) {
            //     this.setState({ autoScrolling: false }, () => {
            //       fullpageApi.setAutoScrolling(false);
            //     });
            //   }
            // }
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="">
                    <CSSTransition
                      in={page === 0 && pageLoaded && width > 1199}
                      timeout={1000}
                      classNames="mainTitle-animation"
                    >
                      <div className="green_heading top_about_us_heading mainTitle-animation-enter">
                        Hey there, neighbor.
                      </div>
                    </CSSTransition>
                    <CSSTransition
                      in={page === 0 && pageLoaded && width > 1199}
                      timeout={1000}
                      classNames="mainText-animation"
                    >
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        We’re here to bring life to your digital vision. <br/>
                        Got a project in mind? <br />
                        Let's talk.
                      </div>
                    </CSSTransition>
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
                  <h1>What we value.</h1>
                  <h2>
                    Our work belongs to the digital world, but our hearts belong to
                    you. Building digital
                    <br />
                    products takes a little planning, a dash of percision, and a whole
                    lotta love.
                  </h2>
                </div>
                <div className="pixoul_four_grid">
                  <div className="pixoul_four_grid_item">
                    <div className="pixoul_four_grid_item_img_container">
                      <img src={spaceship} alt="Spaceship" />
                    </div>
                    <h3 className="blue_heading">We strive for innovation.</h3>
                    <h4>
                      We make useful, long-lasting products that set the standard for
                      innovation.
                    </h4>
                  </div>
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
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                  <h1>What we design & build.</h1>
                  <h2>
                    We're always pushing the envelope and dreaming of what's possible.
                  </h2>
                </div>
                <div className="pixoul_columns_row">
                  <div className="pixoul_adjustable_column">
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="green_heading">Enterprise Systems</h3>
                      <h4>
                        Big business doesn't scare us. We're ready to implement your
                        next large-scale project.
                      </h4>
                    </div>
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="pink_heading">IoT Devices</h3>
                      <h4>"Hey Alexa..."</h4>
                      <img
                        className="alex_devices_img"
                        src={alexadevices}
                        alt="Alexa devices"
                      />
                    </div>
                  </div>
                  <div className="pixoul_adjustable_column">
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="blue_heading">Sites & Apps</h3>
                      <h4>Need we say more?</h4>
                    </div>
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="purple_heading">Custom Creations</h3>
                      <h4>
                        We'll work with you to create unique solutions that fit your
                        exact requirements.
                      </h4>
                    </div>
                  </div>
                  <div className="pixoul_adjustable_column">
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="orange_heading">Blockchain & Emerging Tech</h3>
                      <h4>We'll simplify the complex.</h4>
                    </div>
                    <div className="pixoul_adjustable_columns_item">
                      <h3 className="light_blue_heading">Wearables and Beyond</h3>
                      <h4>From WatchOS to AR/VR technologies, we've seen it all.</h4>
                    </div>
                  </div>
                </div>
                <div className="pixoul_button_section">
                  <button className="green_button pixoul_button">Recent Work</button>
                </div>
              </div>
              <div className="section">
                <PixoulContactForm
                  heading="Let's get to work."
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
