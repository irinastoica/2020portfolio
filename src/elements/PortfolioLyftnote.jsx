import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import { TimelineLite, gsap, Power3} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { Player } from "video-react";

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);



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
                  <div className="col-lg-6 col-sm-12">
                    <div className="hero-content-line">
                      <h3 className="detailsTitle detailsTitle-white">Project Name</h3>
                    </div>
                    <div className="hero-content-line">
                      <h2 className="animated ">Lytnote - Made for Students</h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Co Founder</span>
                      <span className="role">Lead Ux Designer</span>
                      <span className="role">Front End Developer</span>
                    </div>

                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">Key tools</h3>
                      <span className="role">CSS3 with Bootstrap</span>
                      <span className="role">HTML5</span>
                      <span className="role">Javascript / Jquery</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p> Buying valuable textbooks shouldn't result in overspending and unfair markdowns.
                      Lyfnote is a mobile app made for students who are looking to sell or buy their textbooks in their community.
                      A powerful platform that allows fellow students to connect within campus grounds or a localized area.</p>
                    <p>A major part of my involvement in this project was the UX and UI design of the entire application.
                      My main goal in my research and design was to make sure that students can easily use the app without assistance.
                      As a result of testing the prototype with a few fellow students and running A/B tests, we were able to launch the
                      mobile and web platform at Concordia and Mcgill University in Montreal,  Quebec.</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-thumb-inner mt--150">
                <div className="images-column-2 content">
                  <div className="wrapper">
                    <div className="thumb box mr--40"  data-scroll-speed="5">
                      <img src="/assets/images/portfolio/lyftnote-3a.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb box mr--40"  data-scroll-speed="9">
                      <img src="/assets/images/portfolio/lyftnote-3b.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb box mr--40"  data-scroll-speed="4">
                      <img src="/assets/images/portfolio/lyftnote-3c.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                  </div>
                  <div className="backgroundColor"></div>
                </div>
                <div className="thumb mb--30 box">
                  <img src="/assets/images/portfolio/lyftnote-artboard.png" className="fullWidth" alt="Portfolio Images"/>
                </div>
                <div className="container defaultTopMargin">
                  <div className="images-column-2 content">
                    <div className="wrapper">
                      <div className="thumb box" >
                        <img src="/assets/images/portfolio/lyftnote-2a.jpg" className="fullWidth thumbnail" alt="Portfolio Images"/>
                      </div>
                      <div className="thumb box">
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
                    <div className="col-lg-6 col-sm-12">
                      <h2>Every element made for students</h2>
                      <p>Students no longer have to give their personal phone numbers to strangers in order to exchange information thanks to Lyftnote's secure
                        instant-messaging system. We ensure that all communications take place in a secure and private manner with Lyftnote. </p>

                      <p>The process of listing your textbook has never been so simple! You simply scan the barcode with your smartphone, set your
                        price, mark down the condition and markings, and that's it! Lyftnote takes care of the rest. Barcodes can be scanned to search for textbooks.
                        There are three ways to sort the listings: by schools, by prices, and by location.</p>
                      <p>Are you having trouble finding a textbook? Not a problem! Either purchase the textbook off Amazon straight from Lyftnote or
                        receive push notification alerts when a student posts the requested textbook. Send and receive instant messages with fellow
                        students to discuss and plan out the details of the textbook and exchange. No need to give your phone number away!
                        You decide how you want to meet and exchange information. No need for use of credit cards and no service fees required!
                      </p>
                    </div>
                    <div className="backgroundColor darkGrey"></div>
                  </div>
                </div>


                <div className="images-column-2 content">
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
