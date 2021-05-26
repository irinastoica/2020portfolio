import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import {TimelineLite, Power3} from 'gsap'


function PortfolioRoadkrome() {
  let app = useRef(null);
  // let images =useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: .8 })

  useEffect(() => {

    //Content Vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 200,
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
                  <div className="col-lg-6">
                    <div className="hero-content-line">
                      <h3 className="detailsTitle detailsTitle-white">Project Name</h3>
                    </div>
                    <div className="hero-content-line">
                      <h2 className="animated ">Communications by Vanilla Event </h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Co Founder</span>
                      <span className="role">Ux Designer</span>
                      <span className="role">Front End Developer</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <p>Co-Founder at Lyftnote, a platform for students who are looking to buy or sell used textbooks in their community.
                      A powerful platform that allows fellow students to connect within campus grounds or a localized area.</p>
                    <p>My main implication in this projects was the UX and UI design of the whole app.
                      How to make the app as easy as possible to use, student friendly.
                      I was also in charge of the front end development of the user interface and the user experience of the app.
                      Languages used: CSS3 with Bootstrap, Javascript / Jquery and HTML5.</p>
                  </div>
                </div>
              </div>
              {/*End Top Description*/}
              <div className="portfolio-thumb-inner">
                <div className="thumb mb--30">
                  <img src="/assets/images/portfolio/roadkrome-1.png" className="fullWidth" alt="Portfolio Images"/>
                </div>
                <div className="thumb">
                  <img src="/assets/images/portfolio/roadkromeBlack.svg" alt="Portfolio Images"/>
                </div>
                <div className="container defaultTopMargin">
                  <div className="thumb">
                    <img src="/assets/images/portfolio/roadkrome-2c.png" alt="Portfolio Images"/>
                  </div>
                </div>
                <div className="thumb defaultTopMargin">
                  <img src="/assets/images/portfolio/roadkrome-2.jpg" className="fullWidth" alt="Portfolio Images"/>
                </div>
                <div className="darkGray">
                  <div className="thumb">
                    <img src="/assets/images/portfolio/roadkrome-3.png" alt="Portfolio Images"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/roadkrome.gif" className="fullWidth" alt="Portfolio Images"/>
                  </div>
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
            <a className="case-wrapper" href="/portfolio-intranet">
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
export default PortfolioRoadkrome;
