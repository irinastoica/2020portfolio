import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import {TweenMax, TimelineLite, Power3} from 'gsap'

function PortfolioMotovan() {
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
                      <h2 className="animated ">Motovan Marketing </h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Graphic Designer</span>
                      <span className="role">Front End Developer</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <p>Multiples prints for magasins and events. Working on different sizes and materials in order to succesfully communicate the brands identities.
                      How to make the app as easy as possible to use, student friendly.
                     </p>
                  </div>
                </div>
              </div>
              {/*End Top Description*/}
              <div className="portfolio-thumb-inner">
                <div className="backgroundGrey">
                  <div className="thumb position-relative mb--30">
                    <img src="/assets/images/portfolio/motovan-1a.png" alt="Portfolio Images"/>
                  </div>
                </div>
                <div className="container defaultTopMargin">
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-1.jpg" className="thumbnail" alt="Motovan Ad"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-2.jpg" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-3.jpg" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-4.png" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-5.jpg" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-6.png" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-7.png" className="thumbnail" alt="Motovan"/>
                  </div>
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/motovan-8.png" className="thumbnail" alt="Motovan"/>
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
            <a className="case-wrapper" href="/roadkrome">
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
export default PortfolioMotovan;
