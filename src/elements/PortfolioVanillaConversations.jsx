import React, { useRef, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/Footer";


//Assets
import { Player } from "video-react";

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

  return(
    <React.Fragment>
      <PageHelmet pageTitle='Portfolio Details' />
      <Header logo="symbol-dark"/>

      {/*/!* Start Breadcrump Area *!/*/}


      <div className="applicationWrapper" ref={el => app = el}>
        <div className='containerApp'>
        </div>
      </div>
       <div className="details-banner defaultMargin"  data-black-overlay="7" ref={el => content = el}>
         <div className="container-inner topDescription col-lg-5 col-md-12 animatedParent">
             <h2 className="animated fadeInUp">Communications by Vanilla Event </h2>
             <div className="description animated fadeInUp">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed risus vel elit dapibus mollis.
                 Quisque lobortis dolor leo, quis vulputate nisl tempor vel. Mauris vel commodo est. Nunc semper scelerisque
                 lacus at laoreet. Quisque scelerisque volutpat massa vel porttitor. Nam laoreet nibh sit amet ligula
                 condimentum, a viverra leo gravida. Vestibulum ut dolor varius, varius turpis nec, condimentum sapien.</p>
             </div>
         </div>
         <div className="introImage col-xl-7 col-lg-7 col-md-12">
           <div className="image-boxShadow">
             <Player
               autoPlay
               loop
               muted
               poster="/assets/poster.png"
               src={`../assets/videos/conversations.mp4`} />
           </div>
         </div>
       </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details bg_color--1">
            <div className="portfolio-details">
                <div className="thumb mb--30"  data-scroll-speed="10">
                  <img src="/assets/images/portfolio/conversations-1.jpg" className="fullWidth" alt="Portfolio Images"/>
                </div>

                <div className="container defaultTopMargin content">
                  <div className="thumb mb--30 box" data-scroll-speed="8">
                    <img src="/assets/images/portfolio/conversations-2.png"  className="image-boxShadow singlePhoto" alt="Portfolio Images"/>
                  </div>
                </div>

                <div className="images-column-2 content">
                  <div className="wrapper">
                    <div className="thumb mb--30 box mr--40 ">
                      <img src="/assets/images/portfolio/conversations-3a.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                    <div className="thumb mb--30 box" data-scroll-speed="16">
                      <img src="/assets/images/portfolio/conversations-3b.png" className="fullWidth image-boxShadow" alt="Portfolio Images"/>
                    </div>
                  </div>
                  <div className="backgroundColor"></div>
              </div>
              <div className="thumb mb--30 box last small" data-scroll-speed="14">
                <img src="/assets/images/portfolio/conversations-3c.png" className="fullWidth" alt="Portfolio Images"/>
              </div>
            </div>
      </div>

      {/* End Portfolio Details */}

      {/* Start Related Work */}
      <div className="portfolio-related-work pb--120 bg_color--1">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2>
              <a className="case-wrapper" href="/portfolio-clients">
                <span className="case-title">
                  <span>
                    Explore Next Project
                  </span>
                </span>
              </a>
            </h2>
          </div>
        </div>
        <div className="related-work text-center mt--30">
          <div className="thumb">
            <a href="/lyftnote">
              <div className="imageRelated">
                <img src="/assets/images/portfolio/asusFeatureImage.png" alt="Portfolio-images"/>
              </div>
            </a>
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
