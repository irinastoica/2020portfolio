import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Irina Stoica </title>
                    <meta name="description" content="Irina is a Montreal based designer and developer who has a passion for crafting a good story. She does digital design, brand design, ensures great user experience with best conversion rate optimization practices and codes websites. " />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
