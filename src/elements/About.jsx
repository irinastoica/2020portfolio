import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";
import Header from "../component/header/HeaderDetails";


class About extends Component{
  render(){
    return(
      <React.Fragment>
        <PageHelmet pageTitle='About' />

        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container container-inner">
              <div className="row row--35 defaultMargin">
                <div className="col-lg-6 col-sm-12">
                  <div className="thumbnail">
                    <img className="w-100" src="/assets/images/about/aboutImage.jpg" alt="About Images"/>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="about-inner inner">
                    <div className="title">
                      <h2>About Us</h2>
                      <p className="description">We create remarkable digital experiences for other humans. Our experience ranges from small organizations to large,
                        high-growth technology companies. We like to see potential in products or brands and then turn them into reality.
                      </p>
                      <p>In addition to designing native apps, coding inspiring new pages and websites, we are capable of delivering prototypes and illustrations as well. No matter the scope of the project, we always deliver a quality of work and creativity that is hard to match.
                      </p>
                    </div>
                  </div>
                  <div className="about-us-list mt--40">
                    <h3 className="detailsTitle">Roles</h3>
                    <span className="role">UX Design</span>
                    <span className="role">Strategy</span>
                    <span className="role">Research</span>
                    <span className="role">Front-End Development</span>
                  </div>
                  <div className="about-us-list mt--40">
                    <h3 className="detailsTitle detailsTitle-white">Specialties</h3>
                    <span className="role">SEO</span>
                    <span className="role">CRO</span>
                    <span className="role">Photoshop, Illustrator, Indesgin</span>
                    <span className="role">Figma</span>
                    <span className="role">Sketch</span>
                    <span className="role">HTML, CSS, SASS/SCSS, Webpack, Javascript</span>
                    <span className="role">Smarty, Twig</span>
                    <span className="role">ReactJS</span>
                    <span className="role">Hugo</span>
                    <span className="role">Wordpress</span>
                    <span className="role">Hubspot</span>
                  </div>
                  <a className="rn-button-style--2" target="_blank" href="/assets/documents/Irina-Stoica.pdf"><span>Download CV</span></a>
                </div>
              </div>

              <div className="row row--35">
                <div className="col-lg-6 col-sm-12">
                  <h2>It's all about the USER EXPERIENCE</h2>
                  <p className="description">The user experience of our projects is made unique and innovative with a
                    highly functional design, centered on usability, and easy navigation.
                  </p>
                  <p>In our fearless pursuit of potential, we often push the limits of what is possible.
                    Regardless of the type of project, our passion for achieving it is inexhaustible.
                  </p>
                </div>
                <div className="col-lg-3"></div>

                <div className="col-lg-3 col-sm-12">
                  <div className="about-us-list mt--40">
                    <h3 className="detailsTitle detailsTitle-white">Clients & Collaborations</h3>
                    <span className="role">Vanilla Forums</span>
                    <span className="role">Asus</span>
                    <span className="role">Harry Potter Wizards Unite</span>
                    <span className="role">Zapier</span>
                    <span className="role">Smartsheet</span>
                    <span className="role">Sonicwall</span>
                    <span className="role">SAP</span>
                    <span className="role">Motovan Inc</span>
                    <span className="role">Zox Helemts</span>
                    <span className="role">Olympia Motosports</span>
                    <span className="role">Lyftnote</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt--40">
              <img className="w-100 thumbnail" src="/assets/images/about/city.jpg" alt="About Images"/>
            </div>
          </div>
        </div>
        {/* End About Area  */}


        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

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
export default About
