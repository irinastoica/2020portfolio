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
    image: 'image-motovan',
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
    const {column , styevariation } = this.props;
    const list = PortfolioListContent.slice(0 , this.props.item);
    return(
      <React.Fragment>
        {list.map((value , index) => (
          //Project1
          <div className="project-item" data-scroll-container>
            <a href={`${value.pageLink}`}>
              <div className={`portfolio ${styevariation}`} data-scroll-section>
                <div className="thumbnail-inner">
                  <Player data-scroll data-scroll-speed="8"
                    autoPlay
                    loop
                    muted
                    poster="/assets/poster.png"
                    src={`${value.video}`}
                  />
                  <div className={`thumbnail ${value.image}`} data-scroll></div>
                </div>
                <div className="content">
                  <div className="content-wrapper">
                    <div className="companyLogo">{value.companyLogoName}</div>
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4>{value.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

        ))}

      </React.Fragment>
    )
  }
}


export default PortfolioList;
