import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import { TimelineLite, Power3} from 'gsap'
import { Player } from "video-react";


function PortfolioLyftnote() {
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


  return (
    <React.Fragment>
      <PageHelmet pageTitle='Portfolio Details'/>
      <Header logo="symbol-dark" color=""/>

      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details bg_color--1">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-details" ref={el => app = el}>
              {/* Start Breadcrump Area */}
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
              <div className="portfolio-thumb-inner mt--150">
                <div className="images-column-2 content">
                  <div className="wrapper">
                    <div className="thumb box mr--40"  data-scroll-speed="5">
                      <img src="/assets/images/portfolio/lyftnote-3a.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box mr--40"  data-scroll-speed="9">
                      <img src="/assets/images/portfolio/lyftnote-3b.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box mr--40"  data-scroll-speed="4">
                      <img src="/assets/images/portfolio/lyftnote-3c.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                  </div>
                  <div className="backgroundColor"></div>
                </div>
                <div className="mt--150">
                  <div className="thumb mb--30 box">
                    <img src="/assets/images/portfolio/lyftnote-artboard.png" className="fullWidth" alt="Portfolio Images"/>
                  </div>
                </div>
                <div className="container defaultTopMargin">
                  <div className="images-column-2 content">
                    <div className="wrapper">
                      <div className="thumb mb--30 box" >
                        <img src="/assets/images/portfolio/lyftnote-2a.jpg" className="fullWidth thumbnail" alt="Portfolio Images"/>
                      </div>
                      <div className="thumb mb--30 box">
                        <img src="/assets/images/portfolio/lyftnote-2b.jpg" className="fullWidth thumbnail" alt="Portfolio Images"/>
                      </div>
                    </div>
                  </div>
                  <div className="images-column-2 content">
                    <div className="wrapper">
                      <div className="thumb mb--30 box mr--40">
                        <img src="/assets/images/portfolio/lyftnote-2c.jpg" className="fullWidth thumbnail" alt="Portfolio Images"/>
                      </div>
                      <div className="thumb mb--30 box mr--40">
                        <img src="/assets/images/portfolio/lyftnote-2d.jpg" className="fullWidth thumbnail" alt="Portfolio Images"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fullWidth">
                  <picture className="video-animation">
                    <Player
                      autoPlay
                      loop
                      muted
                      poster="/assets/poster.png"
                      src="../assets/videos/lyftnote.m4v"
                    />
                  </picture>
                </div>

                <div className="images-column-2 content mt--150">
                  <div className="wrapper">
                    <div className="thumb mb--30 box mr--40">
                      <img src="/assets/images/portfolio/lyftnote-1a.jpg" className="fullWidth thumbnail image-boxShadow " alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box mr--40">
                      <img src="/assets/images/portfolio/lyftnote-1b.jpg" className="fullWidth thumbnail image-boxShadow" alt="Portfolio Images"/>
                    </div>
                  </div>
                </div>

                <div className="portfolio-details" ref={el => app = el}>
                  <div className="container-inner">
                    <div className="col-6">
                      <h3 className="detailsTitle detailsTitle-white">Made for Students</h3>
                      <p>Co-Founder at Lyftnote, a platform for students who are looking to buy or sell used textbooks in their community.
                        A powerful platform that allows fellow students to connect within campus grounds or a localized area.</p>
                      <p>My main implication in this projects was the UX and UI design of the whole app.
                        How to make the app as easy as possible to use, student friendly.
                        I was also in charge of the front end development of the user interface and the user experience of the app.
                        Languages used: CSS3 with Bootstrap, Javascript / Jquery and HTML5.</p>
                    </div>
                    <div className="backgroundColor darkGrey"></div>
                  </div>
                </div>


                <div className="images-column-2 content mt--150">
                  <div className="wrapper">
                    <div className="thumb mb--30 box mr--40">
                      <img src="/assets/images/portfolio/lyftnote-4.jpg" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="out-flow-right smaller-image" data-scroll-speed="20">
                      <img src="/assets/images/portfolio/lyftnote-4a.png" className="fullWidth" alt="Portfolio Images"/>
                    </div>
                    <div className="backgroundColor"></div>
                  </div>
                </div>
                <div className="thumb mb--30 darkGrayLight">
                  <img src="/assets/images/portfolio/lyftnote.gif" alt="Portfolio Images"/>
                </div>
                <div className="container">
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/lyftnote-5.png" alt="Portfolio Images"/>
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
            <a className="case-wrapper" href="/motovan">
              Next Project
            </a>
          </h2>
        </div>
      </div>
      {/* End Related Work */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp/>
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer/>


    </React.Fragment>
  )
}
export default PortfolioLyftnote;
