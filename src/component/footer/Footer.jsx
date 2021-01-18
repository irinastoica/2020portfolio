import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                      <div className="col-lg-4">
                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                            {SocialShare.map((val , i) => (
                              <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <a className="rn-button-style--2" href="/contact">
                          <span>Let's chat!</span>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <div className="copyright-text">
                          <p>Copyright © 2021 Irina Stoica</p>
                        </div>
                      </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;
