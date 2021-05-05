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

          <div className="splitshow-left col-6">

            <img className="thumbnail" src="/assets/images/portfolio/preview/vanilla-landingPages.png" alt="image"></img>



            {/*Vanilla LandingPages*/}
            <div className="project-item" data-scroll-container>
              <a href='/portfolio-conversations' className="project-itemLink">
                <div className="thumbnail-inner">
                  <picture className={``}>
                    <img src="/assets/images/portfolio/preview/vanilla-landingPages.png" className="" ></img>
                  </picture>
                </div>
              </a>
              <div className="content-wrapper">
                <div className="inner">
                  <p>Here</p>
                  <h4>Intranet</h4>
                </div>
              </div>
            </div>

          </div>

          {/*Project2*/}
          <div className="splitshow-right col-6">
            <div className="project-item" data-scroll-container>
              <a href='#' className="project-itemLink">
                <div className="portfolio" data-scroll-section>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail`}>
                      <img src="/assets/images/portfolio/preview/intranet-mtv.png" data-scroll-speed="8"></img>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-wrapper">
                      <div className="inner">
                        <p>Here</p>
                        <h4>Intranet</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}


export default PortfolioList;
