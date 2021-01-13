// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home layout

// ScrollMagic
import Demo from './page-demo/Demo';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import PortfolioVanillaConversations from "./elements/PortfolioVanillaConversations";
import PortfolioLyftnote from "./elements/PortfolioLyftnote";
import PortfolioVanillaClients from "./elements/PortfolioVanillaClients";
import PortfolioBlogVanilla from "./elements/PortfolioBlogVanilla";
import PortfolioRoadkrome from "./elements/PortfolioRoadkrome";
import PortfolioMotovanIntranet from "./elements/PortfolioMotovanIntranet";
import error404 from "./elements/error404";


// Blocks Layout

import Counters from "./blocks/Counters";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import Columns from "./blocks/Columns";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>

                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-conversations`} component={PortfolioVanillaConversations}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-lyftnote`} component={PortfolioLyftnote}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-clients`} component={PortfolioVanillaClients}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-blog`} component={PortfolioBlogVanilla}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-roadkrome`} component={PortfolioRoadkrome}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-intranet`} component={PortfolioMotovanIntranet}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
