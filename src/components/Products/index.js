import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';

import SideBar from './sidebar';

import "./products.css";

import bg01 from "../../images/bg01.png";
import bg02 from "../../images/bg02.png";
import bg03 from "../../images/bg03.png";
import bg04 from "../../images/bg04.png";
import bg05 from "../../images/bg05.png";
import bg06 from "../../images/bg06.png";

import iuzeit_white from "../../images/iuzeit-white.svg";
import stallion_white from "../../images/stallion-white.svg";
import GP_white from "../../images/GP-white.svg";
import hcp_white from "../../images/hcp-white.svg";

import buttonX from "../../images/buttonX.svg";
import fusemap_white from "../../images/fusemap_white.svg";
import ikarus_white from "../../images/ikarus.svg";
import products01 from "../../images/products/products01.png";
import products02 from "../../images/products/products02.png";
import products03 from "../../images/products/products03.png";
import products04 from "../../images/products/products04.png";
import products05 from "../../images/products/products05.png";
import products06 from "../../images/products/products06.png";

import fusemapScreen1 from "../../images/products/fusemapScreen1.png";
import fusemapScreen2 from "../../images/products/fusemapScreen2.png";
import fusemapScreen3 from "../../images/products/fusemapScreen3.png";
import fusemapScreen4 from "../../images/products/fusemapScreen4.png";
import fusemapScreen5 from "../../images/products/fusemapScreen5.png";
import fusemapScreen6 from "../../images/products/fusemapScreen6.png";

import GPScreen1 from "../../images/products/GPScreen1.png";
import GPScreen2 from "../../images/products/GPScreen2.png";
import GPScreen3 from "../../images/products/GPScreen3.png";
import GPScreen4 from "../../images/products/GPScreen4.png";
import GPScreen5 from "../../images/products/GPScreen5.png";
import GPScreen6 from "../../images/products/GPScreen6.png";

import hcpScreen1 from "../../images/products/hcpScreen1.png";
import hcpScreen2 from "../../images/products/hcpScreen2.png";
import hcpScreen3 from "../../images/products/hcpScreen3.png";
import hcpScreen4 from "../../images/products/hcpScreen4.png";
import hcpScreen5 from "../../images/products/hcpScreen5.png";
import hcpScreen6 from "../../images/products/hcpScreen6.png";

import iuzeitScreen1 from "../../images/products/iuzeitScreen1.png";
import iuzeitScreen2 from "../../images/products/iuzeitScreen2.png";
import iuzeitScreen3 from "../../images/products/iuzeitScreen3.png";
import iuzeitScreen4 from "../../images/products/iuzeitScreen4.png";
import iuzeitScreen5 from "../../images/products/iuzeitScreen5.png";
import iuzeitScreen6 from "../../images/products/iuzeitScreen6.png";

import stallionScreen1 from "../../images/products/stallionScreen1.png";
import stallionScreen2 from "../../images/products/stallionScreen2.png";
import stallionScreen3 from "../../images/products/stallionScreen3.png";
import stallionScreen4 from "../../images/products/stallionScreen4.png";
import stallionScreen5 from "../../images/products/stallionScreen5.png";
import stallionScreen6 from "../../images/products/stallionScreen6.png";

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
    const { location } = this.props;
    const pageId = location.pathname.split('/')[2];
    const pageIndex = ["00", "01"];
    const { page, pageLoaded, width, progress } = this.state;
    const { isMenuVisible } = this.props;

    const coverStyle = cn('parallax-cover', {
      'blue-cover' : pageId === '01' || pageId === '03' || pageId === '05',
      'green-cover' : pageId === '02' || pageId === '04' || pageId === '06',
    });

    const ikarusScreens = [
      products01,
      products02,
      products03,
      products04,
      products05,
      products06,
    ];
    
    const settings = {
      className: "slider variable-width",
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      slidesPerRow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    };
  
    const bgImages = {
      '01': bg01,
      '02': bg02,
      '03': bg03,
      '04': bg04,
      '05': bg05,
      '06': bg06,
    };

    const fusemapScreens = [
      fusemapScreen1,
      fusemapScreen2,
      fusemapScreen3,
      fusemapScreen4,
      fusemapScreen5,
      fusemapScreen6,
    ];

    const GPScreens = [
      GPScreen1,
      GPScreen2,
      GPScreen3,
      GPScreen4,
      GPScreen5,
      GPScreen6,
    ];

    const hcpScreens = [
      hcpScreen1,
      hcpScreen2,
      hcpScreen3,
      hcpScreen4,
      hcpScreen5,
      hcpScreen6,
    ];

    const iuzeitScreens = [
      iuzeitScreen1,
      iuzeitScreen2,
      iuzeitScreen3,
      iuzeitScreen4,
      iuzeitScreen5,
      iuzeitScreen6,
    ];

    const stallionScreens = [
      stallionScreen1,
      stallionScreen2,
      stallionScreen3,
      stallionScreen4,
      stallionScreen5,
      stallionScreen6,
    ];

    const productScreens = {
      '01': iuzeitScreens,
      '02': GPScreens,
      '03': stallionScreens,
      '04': fusemapScreens,
      '05': hcpScreens,
      '06': ikarusScreens,
    };

    const logos = {
      '01': iuzeit_white,
      '02': GP_white,
      '03': stallion_white,
      '04': fusemap_white,
      '05': hcp_white,
      '06': ikarus_white,
    };
    const descriptions = {
      '01': 'With iuzeit, finding the product that meets a user’s exact lifestyle need is only a few clicks away.  We refined the challenges of a traditional e-commerce journey to create a markeplace that helps prioritize what products matter most—all in one sleek, modern interface.',
      '02': 'In partnership with Army of Bees, we designed a new check-in/check-out system that allowed Georgia-Pacific to quickly give their logisitics team an efficiency boost.  We built the product tailor-fit for outdoor professionals, and even designed it to minimzie sun glare.',
      '03': 'Working with Stallion meant taking data visualization to the next level.  By doing a deep-dive into the world of oilfield services, we built a robust interface that simplified complex data streams and allowed snapshot statistics of vital KPIs.',
      '04': 'Working with Fusemap was a chance to redefine how we interpret basic, everyday tasks.  Using their cloud-based tool, we captured and vizualized the complex operational tasks of automated and AI-powered building management.',
      '05': 'Designing for a multi-billion user industry, we evolved the Healthcare Compliance Pros online suite into a feature-rich tool that helps maintain strict legal compliance, engages users, and fosters long-term retention.',
      '06': 'Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.'
    };
    const subtitles = {
      '01': 'Shaping the future of the online purchase journey.',
      '02': 'Transforming how logistics gets done.',
      '03': 'Taking field analytics to a whole new level.',
      '04': 'Thinking smarter about how we power the world.',
      '05': 'Setting the standard in healthcare—literally.',
      '06': 'Redefining the business marketplace.'
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
                    <img src={bgImages[pageId]} alt={`bg${pageId}`} />
                  </Parallax>
                  <div className={coverStyle} />
                  <div className="parallax-content about-page-button-animation">
                    <Link
                      className="pixoul_button"
                      to='/'
                    >
                      <img src={buttonX} alt="buttonX" />
                    </Link>
                    <div className="brand">
                      <img src={logos[pageId]} alt="Logo" />
                    </div>
                  </div>
                </div>
                  
                <div className="product-content">
                  <div className="description">
                    <h2>{descriptions[pageId]}</h2>
                    <h3>{subtitles[pageId]}</h3>
                  </div>
                  <SideBar />
                </div>
              </div>
              <div className="section grey-background">
                <Slider {...settings}>
                  {
                    productScreens[pageId].map((item, index) => (
                      <div key={index}>
                        <div className='product-item'>
                          <div className='shadow' />
                          <img
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
