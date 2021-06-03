import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "./component/common/Helmet";
import Header from "./component/header/HeaderDetails";
import FooterTwo from "./component/footer/FooterTwo";
import PortfolioList from "./elements/portfolio/PortfolioList";
import { Player } from "video-react";
import TabTwo from "./elements/tab/TabTwo";


const PortfolioLanding = () => {
  let title = 'We live in details,\n' +
    'We create Buzz';
  return (
    <div className="">
      <Helmet pageTitle="Home Page" />
      <Header logo="symbol-dark" color=""/>
      {/* Start About Area */}
      <div id="about" className="home-intro-wrapper">
        <div className="about-area fullHeight bg_color--1">
          <div className="about-wrapper">
            <div className="container col-2">
              {/*Video*/}
              <div className="col-lg-5 col-md-7 col-sm-7 home-intro-left section">
                <div className="home-video-intro">
                  {/*<img className="w-100" src="/assets/images/about/homepageImage.jpg" alt="About Images"/>*/}
                  <div className="image-boxShadow">
                    <Player
                      autoPlay
                      loop
                      muted
                      poster="/assets/poster.png"
                      src={`../assets/videos/homeVideo.mp4`} />
                  </div>
                </div>
                <div className="home-left-title">
                  <h2 className="title">{title}</h2>
                </div>
                <div className="description">
                  Branding, UX & UI design, Web Developement
                </div>
              </div>
              {/*Intro*/}
              <div className="col-lg-7 col-md-5 col-sm-5 section">
                <div className="about-inner home-intro-inner">
                  <div className="section-title home-left-title">
                    <h2 className="title home-intro-title-nomask">{title}</h2>
                  </div>
                  {/*<div className="row mt--30">*/}
                  {/*<TabTwo tabStyle="tab-style--1" />*/}
                  {/*</div>*/}
                </div>
              </div>
              {/*Panel*/}
              <div className="animated-panels">
                <div className="panels-right">
                  <img className="image" id="Panel1" sizes="100vw"
                       srcSet="/assets/images/svgs/shape5.svg"
                       alt=""></img>
                  <img className="image" id="Panel2" sizes="100vw"
                       srcSet="/assets/images/svgs/shape6.svg"
                       alt=""></img>
                  <img className="image" id="Panel6" sizes="100vw"
                       srcSet="/assets/images/svgs/shape10.svg"
                       alt=""></img>
                  <img className="image" id="Panel7" sizes="100vw"
                       srcSet="/assets/images/svgs/shape11.svg"
                       alt=""></img>
                  {/*<img  id="Panel4" sizes="100vw"*/}
                       {/*srcSet="/assets/images/svgs/shape8.svg"*/}
                       {/*alt=""></img>*/}
                  {/*<img id="Panel5" sizes="100vw"*/}
                       {/*srcSet="/assets/images/svgs/shape9.svg"*/}
                       {/*alt=""></img>*/}
                </div>
              </div>
            </div>
            {/*Panel*/}
            <div className="panels-right">
              <img className="image panel-xy-1x1" id="Panel16" data-scroll-speed="15" sizes="100vw" srcSet="/assets/images/svgs/shape1.svg"
                   alt=""></img>
              <img className="image panel-xy-2x1" id="Panel17" data-scroll-speed="15" sizes="100vw"
                   srcSet="/assets/images/svgs/shape2.svg"
                   alt=""></img>
              <img className="image panel-xy-3x1" data-scroll-speed="15" id="Panel18" sizes="100vw"
                   srcSet="/assets/images/svgs/shape3.svg"
                   alt=""></img>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area
      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120">
          <div className="portfolio-sacousel-inner">
              <div className="projectsWrapper">
                  <div className="project-container">
                    <PortfolioList styevariation="text-left mt--40" item="7" />
                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

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
