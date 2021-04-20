import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import Header from "../component/header/HeaderDetails";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import BrandTwo from "../elements/BrandTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import { Player } from "video-react";


const PortfolioLanding = () => {
  let title = 'ready for a new experience combinaing code and Design.',
    description = 'I am all about tehnology, design and positive vibes';
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
              <div className="col-lg-5 home-intro-left section">
                <div className="home-video-intro">
                  {/*<img className="w-100" src="/assets/images/about/homepageImage.jpg" alt="About Images"/>*/}
                  <div className="image-boxShadow">
                    <Player
                      autoPlay
                      loop
                      muted
                      poster="/assets/poster.png"
                      src={`../assets/videos/intro.mp4`} />
                  </div>
                </div>
                <div className="home-left-title">
                  <h2 className="title">{title}</h2>
                </div>
              </div>
              {/*Intro*/}
              <div className="col-lg-7 section">
                <div className="about-inner home-intro-inner">
                  <div className="section-title home-left-title">
                    <h2 className="title home-intro-title-nomask">{title}</h2>
                  </div>
                  {/*<div className="row mt--30">*/}
                  {/*<TabTwo tabStyle="tab-style--1" />*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area

      {/* Start Service Area  */}
      {/*<div className="brands">*/}
          {/*<div className="container">*/}
            {/*<h2>Some of the brands that I've worked with</h2>*/}
            {/*/!* Start Brand Area *!/*/}
            {/*<div className="rn-brand-area brand-separation bg_color--5 ptb--120">*/}
              {/*<div className="container">*/}
                {/*<div className="row">*/}
                  {/*<div className="col-lg-12">*/}
                    {/*<BrandTwo />*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*/!* End Brand Area *!/*/}
          {/*</div>*/}
      {/*</div>*/}
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
              <div className="projectsWrapper">
                  <div className="project-container col-sm-10 col-md-10 col-lg-10">
                    <PortfolioList styevariation="text-left mt--40" item="7" />
                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree contactImages="/assets/images/about/homepageImage.jpg" contactTitle="Let's chat!" />
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
