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
    const headlineFourth = headlineThird.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children], 1, {
      y: 270,
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
              <div className="container-inner dark">
                <div className="col-lg-12" ref={el => content = el}>
                  <div className="col-md-6 col-sm-12 rightSide">
                    <div className="hero-content-line">
                      <h3 className="detailsTitle detailsTitle-white">Project Name</h3>
                    </div>
                    <div className="hero-content-line">
                      <h2 className="animated ">Vanilla Forums Blog & Library</h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Lead Ux Design</span>
                      <span className="role">Front End Developer</span>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">Key tools</h3>
                      <span className="role">Hubspot</span>
                      <span className="role">Sketch</span>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-4 col-lg-5 col-sm-12">
                    <p>I joined the marketing team of Vanilla Forums in early 2019. My first mission in the team was to
                      rethink the branding and to implement new CRO practices into the website. Following a
                      brainstorming session, we decided to redesign the blog as well as the library. Originally,
                      the blog was built with Wordpress and we decided to move the entire content to HubSpot to
                      take advantage of all the analytics it offered.
                    </p>
                    <p>With the need to update the whole website, we knew that including our personas illustrations
                      is a vital step in providing an easier  experience for our users.</p>
                  </div>
                </div>
              </div>
              {/*End Top Description*/}
              <div className="portfolio-thumb-inner dark">
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
                  {/*<section></section>*/}
                  <div className="thumb position-relative mb--30 dark">
                    <div className="container-inner">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h2>Improving the User Experience</h2>
                        <p className="subtitle">We were astonished by the opportunity to participate in such an ambitious, large-scale project as Vanilla's library. </p>
                      <p>
                        Users are able to filter information on the page based on two main filters. The first one is the Use Case filter:
                        “Support, Success, Marketing, Product and Community” and the second one is the Content Type: “Ebook, Webinar,
                        Case Study, Template”. As part of improving the user experience on the website, a search bar was added as well.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="images-column-1 fullWidth thumb position-relative mb--30 content">
                  <img src="/assets/images/portfolio/library.png" className="mr--40" alt="Library Image"/>
                </div>
                <div className="justify-content-end mb--30 dark">
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
                <div className="mt--150">
                  <video autoPlay loop muted poster="assets/videos/library.jpg" className="video-width video-animation">
                    <source src="assets/videos/library.mp4" type="video/mp4"></source>
                  </video>
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
