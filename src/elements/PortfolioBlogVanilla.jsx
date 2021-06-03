import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import { TimelineLite, Power3} from 'gsap'
import { Player } from "video-react";

function PortfolioBlogVanilla() {
  let app = useRef(null);
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
      <PageHelmet pageTitle='Blog Vanilla' />
      <Header logo="symbol-dark"/>

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-details" ref={el => app = el}>
              {/* Start Top Description */}
              <div className="container-inner">
                <div className="col-lg-12" ref={el => content = el}>
                  <div className="col-md-6 col-sm-12 rightSide">
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
                  <div className="col-md-1"></div>
                  <div className="col-md-4 col-lg-5 col-sm-12">
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
                <div className="images-column-1 thumb position-relative mb--30 content">
                  <img src="/assets/images/portfolio/blog-1.jpg" className="thumbnail mr--40"
                       alt="Portfolio Images"/>
                </div>
                <div className="container">
                  <img src="/assets/images/portfolio/blog-2.jpg" className="smaller-image" alt="Portfolio Images"/>
                  <div className="images-column-2 thumb content">
                    <img src="/assets/images/portfolio/blog-mobile1.png" className="smaller-image thumbnail" alt="Portfolio Images"/>
                    <img src="/assets/images/portfolio/blog-mobile2.png" className="smaller-image thumbnail mt--40" alt="Portfolio Images"/>
                  </div>
                  <section></section>
                  <div className="thumb position-relative mb--30">
                    <div className="container-inner">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h2>Improving the User Experience</h2>
                        <p className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p>
                      </div>
                    </div>
                  </div>
                  <section>
                    <div className="justify-content-end mb--30">
                      <div className="video col-sm-8 col-md-7">
                        <Player class
                          autoPlay
                          loop
                          muted
                          poster="/assets/poster.png"
                          src={`../assets/videos/library-2.mp4`} />
                      </div>
                      <div className="hex">
                        <img src="/assets/images/svgs/hex.svg" alt="Portfolio Images"/>
                      </div>
                    </div>
                  </section>
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
            <a className="case-wrapper" href="/motovan-intranet">
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
export default PortfolioBlogVanilla;
