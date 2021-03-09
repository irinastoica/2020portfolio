import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails extends Component{
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
                <div className="details-banner pt--120 pb--190 bg_image bg_image-motovan"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title pt--100">
                                    <h2 className="title theme-gradient">Motovan <br/> Motosports </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, ipsum ut
                                      vestibulum pellentesque, nisi dui hendrerit turpis, sit amet efficitur nisi nunc a augue.
                                      Aliquam erat volutpat. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Trydo</h2>
                                        <p className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Branch</span>
                                                <h4>Ability</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Website</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Program</span>
                                                <h4>View Project</h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="backgroundGrey">
                                          <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/motovan-1a.png" alt="Portfolio Images"/>
                                          </div>
                                        </div>
                                        <div className="container defaultTopMargin">
                                            <div className="thumb mb--30">
                                                <img src="/assets/images/portfolio/motovan-1.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                                <img src="/assets/images/portfolio/motovan-2.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                                <img src="/assets/images/portfolio/motovan-3.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                              <img src="/assets/images/portfolio/motovan-4.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                              <img src="/assets/images/portfolio/motovan-5.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                              <img src="/assets/images/portfolio/motovan-6.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                              <img src="/assets/images/portfolio/motovan-7.png" alt="Portfolio Images"/>
                                            </div>
                                            <div className="thumb mb--30">
                                              <img src="/assets/images/portfolio/motovan-8.png" alt="Portfolio Images"/>
                                            </div>
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
                      <h2>
                        <a className="case-wrapper" href="/portfolio-roadkrome">
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
                      <a href="/portfolio-roadkrome">
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
}
export default PortfolioDetails;
