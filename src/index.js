// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Create Import File
import './index.scss';

// ScrollMagic
import Demo from './homepage';

// Element Layout
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import PortfolioVanillaConversations from "./elements/PortfolioVanillaLandingPages";
import PortfolioLyftnote from "./elements/PortfolioLyftnote";
import PortfolioVanillaClients from "./elements/PortfolioVanillaClients";
import PortfolioBlogVanilla from "./elements/PortfolioBlogVanilla";
import PortfolioRoadkrome from "./elements/PortfolioRoadkrome";
import PortfolioMotovanIntranet from "./elements/PortfolioMotovanIntranet";
import error404 from "./elements/error404";


// Blocks Layout
import Brand from "./blocks/Counters";
import Counters from "./blocks/Counters";
import Portfolio from "./blocks/Portfolio";
import ProgressBar from "./blocks/ProgressBar";
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
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/vanilla-landing-pages`} component={PortfolioVanillaConversations}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/lyftnote`} component={PortfolioLyftnote}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/vanilla-clients`} component={PortfolioVanillaClients}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/vanilla-blog`} component={PortfolioBlogVanilla}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/motovan`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/roadkrome`} component={PortfolioRoadkrome}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/motovan-intranet`} component={PortfolioMotovanIntranet}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
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
