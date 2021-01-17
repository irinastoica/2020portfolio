import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/Footer";

import {TweenMax, TimelineLite, Power3} from 'gsap'

//Assets
import arrow from '../images/arrow-right.svg'

const SocialShare = [
  {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
  {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
  {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
  {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]


function PortfolioVanillaConversations() {
  let app = useRef(null);
  // let images =useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay: .8})

  useEffect( () => {

    //Content Vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
      y: 20,
      ease: Power3.easeOut,
      delay: .4
    }, .15, 'Start')
      .from(contentP, 1, { y:20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, { y:20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])

  return(
    <React.Fragment>
      <PageHelmet pageTitle='Portfolio Details' />
      <Header logo="symbol-dark" color="color-black"/>

      {/*/!* Start Breadcrump Area *!/*/}


      <div className="applicationWrapper" ref={el => app = el}>
        <div className='containerApp'>
        </div>
      </div>
       <div className="details-banner pt--120 pb--190 thumbnail bg_image image-1"  data-black-overlay="7" ref={el => content = el}>
         <div className="container-inner topDescription">
           <div className="col-6 leftDescription">
             <h3 className="detailsTitle detailsTitle-white">Project</h3>
             <span>Communications by Vanilla Event </span>
             <div className="btn-row">
               <button className="explore-button">Explore
                 <div className="arrow-icon">
                   <img src={arrow} alt="row"/>
                 </div>
               </button>
             </div>
           </div>
           <div className="col-6">
             <h3 className="detailsTitle detailsTitle-white">My role</h3>
             <span className="role">Ux Designer</span>
             <span className="role">Front End Developer</span>
           </div>
         </div>
       </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details bg_color--1">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-details">
              <div className="container-inner">
                <div className="col-6">
                  <h3 className="detailsTitle">The Challenge</h3>
                </div>
                <div className="col-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed risus vel elit dapibus mollis.
                    Quisque lobortis dolor leo, quis vulputate nisl tempor vel. Mauris vel commodo est. Nunc semper scelerisque
                    lacus at laoreet. Quisque scelerisque volutpat massa vel porttitor. Nam laoreet nibh sit amet ligula
                    condimentum, a viverra leo gravida. Vestibulum ut dolor varius, varius turpis nec, condimentum sapien.</p>
                </div>
              </div>
              <div className="portfolio-thumb-inner">
                <div className="thumb position-relative mb--30">
                  <img src="/assets/images/portfolio/conversations-1.jpg" class="fullWidth" alt="Portfolio Images"/>
                </div>
                <div className="container defaultTopMargin">
                  <div className="thumb mb--30">
                    <img src="/assets/images/portfolio/conversations-2.jpg" alt="Portfolio Images"/>
                  </div>
                </div>
                <div className="thumb mb--30">
                  <img src="/assets/images/portfolio/conversations-3.jpg" class="fullWidth" alt="Portfolio Images"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Related Work */}
      <div className="portfolio-related-work pb--120 bg_color--1">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2>Explore Next Project</h2>
          </div>
        </div>
        <div className="related-work text-center mt--30">
          <div className="thumb">
            <a href="/portfolio-lyftnote">
              <img src="/assets/images/portfolio/lyftnotepreview.png" alt="Portfolio-images"/>
            </a>
            <div className="content">
              <div className="content-wrapper">
                <div className="inner">
                  <p>Development</p>
                  <h4><a href="/portfolio-details">Lyftnote</a></h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-lyftnote">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default PortfolioVanillaConversations;
