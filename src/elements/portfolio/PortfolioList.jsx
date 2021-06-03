import React, { Component } from "react";
import { Player } from 'video-react';

class PortfolioList extends Component {


  render(){
    return(
      <React.Fragment>
        <div className="project-wrapper" id="portfolio">
          <div className="splitshow-left col-lg-5 col-sm-12">
            {/*Vanilla LandingPages*/}
            <div className="project-item" data-scroll-container>
              <a href='/vanilla-landing-pages' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/vanilla-landingPages.png" className="thumbnail" alt="blog-image"></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Design & Development</p>
                  <h4 className="project-name">Vanilla Forums - Landing Pages</h4>
                </div>
              </div>
            </div>

            {/*Blog*/}
            <section></section>
            <div className="project-item" data-scroll-container>
              <a href='/vanilla-blog' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/blog.jpg" className="thumbnail" alt="blog-image"></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Design & Development</p>
                  <h4 className="project-name">Vanilla Forums Blog & Library</h4>
                </div>
              </div>
            </div>

            {/*Lyftnote*/}
            <section className="project-item colorChange" data-scroll-container>
              <a href='/lyftnote' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <video autoPlay loop muted poster="assets/videos/asus.jpg" className="video-smaller video-animation">
                      <source src="assets/videos/preview-lytnote.mp4" type="video/mp4"></source>
                    </video>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">Co-founder</p>
                  <h4 className="project-name">Lyftnote</h4>
                </div>
              </div>
            </section>

            {/*Roadkrome*/}
            <section className="project-item" data-scroll-container>
              <a href='/roadkrome' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className="video-animation">
                    <Player className="video-smaller"
                      autoPlay
                      loop
                      muted
                      poster="/assets/poster.png"
                      src="../assets/videos/roadkrome.mp4"
                    />
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Design</p>
                  <h4 className="project-name">Roadkrome</h4>
                </div>
              </div>
            </section>
          </div>
          <div className="splitshow-right col-lg-5 col-sm-12">

            {/*Asus*/}
            <div className="project-item" data-scroll-container>
              <a href='/vanilla-clients' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/asus.jpg" className="thumbnail" alt="asus" ></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Designer & Development</p>
                  <h4 className="project-name">Vanilla Forums - Landing Pages</h4>
                </div>
              </div>
            </div>
            <section></section>

            {/*Mtv Intranet*/}
            <section className="project-item" data-scroll-container>
              <a href='/motovan-intranet' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/intranet-mtv.png" className="thumbnail" alt="intranet-montovan" ></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Design & Development</p>
                  <h4 className="project-name">Motovan/ MTA Intranet</h4>
                </div>
              </div>
            </section>

            {/*  Motovan  */}
            <section className="project-item colorChange" data-scroll-container>
              <a href='/portfolio-details' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="../assets/images/portfolio/preview/mtv.jpg" className="thumbnail" alt="motovan"></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">Graphic Design</p>
                  <h4 className="project-name">Motovan Corporation</h4>
                </div>
              </div>
            </section>
          </div>

        </div>
      </React.Fragment>
    )
  }
}


export default PortfolioList;
