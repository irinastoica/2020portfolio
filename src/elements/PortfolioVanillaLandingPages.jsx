import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";

import { TimelineLite, Power3} from 'gsap'
import { Player } from "video-react";

function PortfolioLandinpage() {
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
      <div className="rn-portfolio-details">
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
                      <h2 className="animated">Communications by Vanilla Event </h2>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">My role</h3>
                      <span className="role">Lead Ux Designer (Sketch, Figma)</span>
                      <span className="role">Lead Front End Developer</span>
                      <span className="role">CRO practices</span>
                    </div>
                    <div className="hero-content-line roleWrapper">
                      <h3 className="detailsTitle detailsTitle-white">Key tools</h3>
                      <span className="role">Go</span>
                      <span className="role">Hubspot</span>
                      <span className="role">Hugo</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <p>Conversations by Vanilla is an annual free 3 day expo, where you'll find recordings from 30+ speakers on all
                      things that matter in the community space. Due to the global pandemic in 2020 in-person activities were prohibited
                      , therefor we decided to continue the conversation with this online conference. I was assigned the
                      mission of building a microsite for this event and applying user experience best practices
                      in order to increase our conversion rate. </p>
                    <p>In order to showcase diversity, I illustrated characters
                      from various backgrounds based on our user personas. The microsite mockups were created in Sketch and then coded in GO programming language, on a Hugo framework. </p>
                  </div>
                </div>
              </div>
              {/*End Top Description*/}
              <div className="portfolio-thumb-inner">
                <div className="thumb mb--30">
                  <img src="/assets/images/portfolio/conversations-1.jpg" className="fullWidth" alt="Portfolio Images"/>
                </div>

                <div className="container defaultTopMargin content">
                  <div className="thumb mb--30 box image-boxShadow">
                    <img src="/assets/images/portfolio/conversations-2.png"  className="singlePhoto thumbnail" alt="Portfolio Images"/>
                  </div>
                </div>

                <div className="images-column-2 parallexMargin content defaultMargin">
                  <div className="wrapper">
                    <div className="thumb mb--30 box mr--40">
                      <img src="/assets/images/portfolio/conversations-3a.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box box-parallax-1" data-scroll-speed="16">
                      <img src="/assets/images/portfolio/conversations-3b.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                  </div>
                  <div className="backgroundColor"></div>
                </div>
                <section></section>
                <div className="images-column-1">
                  <div className="smallContainer">
                    <div className="introImage">
                      <Player
                        autoPlay
                        loop
                        muted
                        poster="/assets/poster.png"
                        src={`../assets/videos/conversations.mp4`} />
                    </div>
                    <img src="/assets/images/svgs/shape.svg" data-scroll-speed="20" className="shapeTop image-boxShadow" alt="Portfolio Images"/>
                  </div>
                </div>
                <div className="container-inner">
                  <div className="col-lg-12">
                    <div className="col-6">
                      <h2>Partner Ecosystem</h2>
                      <p>In March 2021, I <strong>led  the design and development </strong> of the partner ecosystem microsite. It's purpose is to let users know more
                        about Vanilla's partners, as well as the possibility of becoming a Vanilla partner themselves.  </p>
                      <p>  In April 2021, I built a user-friendly <strong> Hubspot database </strong> to allow any member of the marketing team to add new
                        partner profiles.
                      </p>
                      <p> I led all the design and development work and in May 2021 we successfully launched
                        this project. You can click <a className="green" href="https://vanillaforums.com/en/partners/" target="_blank">here</a> to see the final result.</p>
                    </div>
                  </div>
                </div>
                <section className="images-column-2 content">
                  <div className="wrapper">
                    <div className="thumb mb--30 box mr--40">
                      <img src="/assets/images/portfolio/conversations-5.png" className="shapeTop thumbnail" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box box-parallax-1">
                      <img src="/assets/images/portfolio/conversations-6.png" className="shapeBottom thumbnail" alt="Portfolio Images"/>
                    </div>
                  </div>
                </section>
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
              <a className="case-wrapper" href="/vanilla-clients">
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
export default PortfolioLandinpage;
