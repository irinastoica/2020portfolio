import React, { Component } from "react";
import { Player } from 'video-react';

const PortfolioListContent = [
    {
        image: 'image-1',
        companyLogo: 'logo-1',
        category: 'UX Design & Development',
        title: 'Leading Design for \nVanilla’s Conversations \nEvent'
    },
    {
        video: "../assets/videos/lyftnotepreview.mp4",
        category: 'Development',
        title: 'Lyftnote'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Theming Coding'
    },
    {
        video: "../assets/videos/library.mp4",
        category: 'UX Design & Development',
        title: 'Improving blog'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'ICIT',
        pageLink: '/portfolio-details'
    },

    {
        video: '../assets/videos/roadkrome.mp4',
        category: 'UX Design',
        title: 'Roadkrome'
    },

    {
        image: 'image-5',
        category: 'UX Design & Development',
        title: 'Intern Community'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                              <Player
                                autoPlay
                                loop
                                muted
                                poster="/assets/poster.png"
                                src={`${value.video}`}
                              />
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                              <div className="content-wrapper">
                                <div className={`companyLogo ${value.companyLogo}`}></div>
                                  <div className="inner">
                                      <p>{value.category}</p>
                                      <h4><a href="/portfolio-details">{value.title}</a></h4>
                                      <div className="portfolio-button">
                                          <a className="rn-btn" href={`${value.pageLink}`}>View Details</a>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}


export default PortfolioList;
