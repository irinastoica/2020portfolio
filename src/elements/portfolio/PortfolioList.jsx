import React, { Component, useEffect, useRef } from "react";
import { Player } from 'video-react';


const PortfolioListContent = [
  {
    image: 'image-1',
    companyLogoName: 'Vanilla Forums',
    category: 'UX Design & Development',
    title: 'Leading Design for \nVanilla’s Conversations \nEvent',
    pageLink: '/portfolio-conversations'
  },

  {
    video: "../assets/videos/clients-preview.mp4",
    image: 'image-3',
    category: 'Development',
    title: 'Theming Coding',
    pageLink: '/portfolio-clients'
  },

  {
    image: 'preview-blog',
    category: 'UX Design & Development',
    title: 'Improving blog',
    pageLink: '/portfolio-blog'
  },

  {
    video: "../assets/videos/lyftnotepreview.mp4",
    category: 'Development',
    title: 'Lyftnote',
    pageLink: '/portfolio-lyftnote'
  },


  {
    image: '../assets/images/portfolio/preview/intranet-mtv.png',
    category: 'Development',
    title: 'Motovan',
    pageLink: '/portfolio-details'
  },

  {
    video: '../assets/videos/roadkrome.mp4',
    category: 'UX Design',
    title: 'Roadkrome',
    pageLink: '/portfolio-roadkrome'
  },

  {
    image: 'image-5',
    category: 'UX Design & Development',
    title: 'Intern Community',
    pageLink: '/portfolio-intranet'
  }
];

class PortfolioList extends Component {


  render(){
    return(
      <React.Fragment>
        <div className="project-wrapper">
          <div className="splitshow-left col-5">

            {/*Vanilla LandingPages*/}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-conversations' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/vanilla-landingPages.png" className="thumbnail" ></img>
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
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-blog' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/blog.jpg" className="thumbnail" ></img>
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
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-lyftnote' className="project-itemLink">
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
            </div>

            {/*Roadkrome*/}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-roadkrome' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className="video-animation">
                    <Player
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
            </div>
          </div>
          <div className="splitshow-right col-5">

            {/*Asus*/}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-conversations' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/asus.jpg" className="thumbnail" ></img>
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

            {/*Mtv Intranet*/}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-conversations' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/intranet-mtv.png" className="thumbnail" ></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">UX Design & Development</p>
                  <h4 className="project-name">Motovan/ MTA Intranet</h4>
                </div>
              </div>
            </div>

            {/*  Motovan  */}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-details' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="../assets/images/portfolio/preview/mtv.jpg" className="thumbnail" ></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p className="project-type">Graphic Design</p>
                  <h4 className="project-name">Motovan Corporation</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}


export default PortfolioList;
