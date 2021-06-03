import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import {TimelineLite, Power3} from 'gsap'


function PortfolioVanillaClients() {
  let app = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: .8 })

  useEffect(() => {

    //Content Vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const headlineFourth = headlineThird.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children], 1, {
      y: 240,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

  }, [tl])
  return(
    <React.Fragment>
      <PageHelmet pageTitle='Portfolio Details' />
      <Header logo="symbol-dark"/>

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details bg_color--1">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-details" ref={el => app = el}>
              {/* Start Top Description */}
              <div className="container-inner">
                <div className="col-lg-12" ref={el => content = el}>
                  <div className="col-lg-6 col-sm-12">
                    <div className="hero-content-line">
                      <h3 className="detailsTitle detailsTitle-white">Project Name</h3>
                    </div>
                    <div className="hero-content-line">
                      <h2 className="animated ">Various Theme Integrations </h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Front End Developer</span>
                    </div>

                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">Key tools</h3>
                      <span className="role">ReactJS</span>
                      <span className="role">Agile process (Scrum, Kanban)</span>
                      <span className="role">CI/CD pipeline, Git, Node.js/Yarn</span>
                      <span className="role">HTML, CSS, Javascript</span>
                      <span className="role">Smarty, Twig</span>
                      <span className="role">Docker</span>
                    </div>

                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p>I was responsible for converting and integrating the elements of the clients’s mockups into the Vanilla’s product. </p>
                    <p>I was also interacting with customers to gather requirements, set expectations, and go over the implementation of plugins,
                      modules and theming realizations.  </p>
                    <p>In addition I was providing estimates for the scope of work and broke down complex tasks into Github issues (Zenhub).  
                      I maintained the overall consistency of the community, as well as its compatibility with different browsers. I implemented
                      user interfaces for the product and contribute to improving usability using code that can withstand millions of users.</p>
                  </div>
                </div>
              </div>
              {/*End Top Description*/}

              <div className="portfolio-thumb-inner">
                <div className="thumb position-relative mb--30">
                  <img src="/assets/images/portfolio/asus-1.jpg" alt="Portfolio Images"/>
                </div>
                <div className="grayBackground">
                  <div className="container videos">
                    <video autoPlay loop muted poster="assets/videos/hp.jpg" id="hp-video" class="videos">
                      <source src="assets/videos/hp.mp4" type="video/mp4"></source>
                      <source src="assets/videos/hp.webm" type="video/webm"></source>
                      <source src="assets/videos/hp.ogv" type="video/ogg"></source>
                    </video>
                    <video autoPlay loop muted poster="assets/videos/asus.jpg" id="asus-video" class="videos">
                      <source src="assets/videos/asus.mp4" type="video/mp4"></source>
                      <source src="assets/videos/asus.webm" type="video/webm"></source>
                      <source src="assets/videos/asus.ogv" type="video/ogg"></source>
                    </video>
                  </div>
                </div>
                <div className="thumb position-relative mb--30">
                  <img src="/assets/images/portfolio/hp-1.jpg" alt="Portfolio Images"/>
                </div>
                <div className="images-column-3 thumb position-relative mb--30 parallexMargin">
                  <img src="/assets/images/portfolio/zapier-1.jpg" alt="Portfolio Images"  data-scroll-speed="15" />
                  <img src="/assets/images/portfolio/zapier-2.jpg" className="mobile" alt="Portfolio Images" data-scroll-speed="25" />
                  <img src="/assets/images/portfolio/zapier-3.jpg" alt="Portfolio Images" data-scroll-speed="10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Related Work */}
      <div className="portfolio-related-work pb--120">
        <div className="section-title text-center">
          <h2>
            <a className="case-wrapper" href="/vanilla-blog">
              Next Project
            </a>
          </h2>
        </div>
      </div>
      {/* End Related Work */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />


    </React.Fragment>
  )
}
export default PortfolioVanillaClients;
