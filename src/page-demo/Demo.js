import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Brand from "../home/PersonalPortfolio";

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my World',
    description: '',
    buttonText: '',
    buttonLink: ''
  }
]
const PortfolioLanding = () => {
  let title = 'Irina is a passionate designer with a big desir to craft amazing inspiring stories behind any design.',
    description = 'I am all about tehnology, design and positive vibes';
  const PostList = BlogContent.slice(0 , 3);
  return (
    <div className="active-dark">
      <Helmet pageTitle="Portfolio Landing" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}


      {/* Start Service Area  */}
      <div id="service" className="fix">
          <div className="container">
            <h1>Some of the brands that I've worked with</h1>
          </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
              <div className="projectsWrapper">
                <PortfolioList styevariation="text-left mt--40" column="col-12" item="7" />
              </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Let's chat!" />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

    </div>
  )
}

export default PortfolioLanding;
