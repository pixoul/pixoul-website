import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';
import { CSSTransition } from "react-transition-group";
import SideBar from './sidebar';

import "./products.css";

import bg01 from "../../images/bg01.png";
import buttonX from "../../images/buttonX.svg";
import products01 from "../../images/products/products01.png";
import products02 from "../../images/products/products02.png";
import products03 from "../../images/products/products03.png";
import products04 from "../../images/products/products04.png";
import products05 from "../../images/products/products05.png";
import products06 from "../../images/products/products06.png";

const cn = require('classnames');

class ProductsPage extends React.Component {
  static defaultProps = {
    mode: 'ikarūs',
    text: 'Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.'
  }

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
    const carouselItems = [
      products01,
      products02,
      products03,
      products04,
      products05,
      products06,
    ];
    // const titleTimeout = {
    //   appear: 900,
    //   enter: 1950,
    //   exit: 50,
    // };

    // const textTimeout = {
    //   appear: 900,
    //   enter: 2450,
    //   exit: 50,
    // };
    
    const settings = {
      className: "slider variable-width",
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      slidesPerRow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
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
          fitToSection={false}
          render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="parallax-wrapper">
                  <Parallax y={[-20, 20]} className="parallax" tagOuter="figure">
                    <img src={bg01} alt='background01' />
                  </Parallax>
                  <div className="parallax-cover" />
                  <div className="parallax-content about-page-button-animation">
                    <button
                      onClick={() => {}}
                      className="pixoul_button"
                    >
                      <img src={buttonX} alt="buttonX" />
                    </button>
                    <div>ikarūs</div>
                  </div>
                </div>
                  
                <div className="product-content">
                  <div className="description">
                    <h2>Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.</h2>
                    <h3>Redefining the business marketplace</h3>
                  </div>
                  <SideBar />
                </div>
              </div>
              <div className="section grey-background">
                <Slider {...settings}>
                  {
                    carouselItems.map((item, index) => (
                      <div>
                        <div className='product-item'>
                          <div className='shadow' />
                          <img
                            key={item}
                            src={item}
                            alt={item}
                          />
                        </div>
                      </div>
                    ))
                  }
                </Slider>
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
