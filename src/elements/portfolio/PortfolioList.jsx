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
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        image: 'image-2',
        category: 'Development',
        title: 'ICIT'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'ICIT'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'ICIT'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'ICIT'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'ICITw'
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
                      <Player
                        autoPlay
                        muted
                        poster="/assets/poster.png"
                        src={`${value.video}`}
                      />
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
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
                                          <a className="rn-btn" href="/portfolio-details">View Details</a>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                ))}
              <Player
                autoPlay
                muted
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />


            </React.Fragment>
        )
    }
}


export default PortfolioList;
