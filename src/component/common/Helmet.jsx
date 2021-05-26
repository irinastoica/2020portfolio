import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Irina Stoica </title>
                    <meta name="description" content="description seo here" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
