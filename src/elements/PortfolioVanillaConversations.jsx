import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioVanillaConversations extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />
                <Header logo="symbol-dark" color="color-black"/>

                {/* Start Breadcrump Area */}
                <div className="details-banner pt--120 pb--190 thumbnail bg_image image-1"  data-black-overlay="7">
                  <div className="container-inner">
                      <div className="col-6">
                          <h3 className="detailsTitle detailsTitle-white">Project</h3>
                          <span>Communications by Vanilla Event </span>
                      </div>
                      <div className="col-6">
                        <h3 className="detailsTitle detailsTitle-white">My role</h3>
                        <span>Ux Designer</span>
                        <span>Front End Developer</span>
                      </div>
                  </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
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
}
export default PortfolioVanillaConversations;
