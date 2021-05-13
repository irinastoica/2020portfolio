import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/irina-stoica/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class HeaderDetails extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
              <div className="logo">
                <a href="/" id="plastic_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149 540">
                    <path d="M26.8 499.7h101.4V524H26.8v-24.3zM46.6 420.9H67c-.3 1.6-.5 3.3-.5 5 0 11.5 8.9 21.5 24.5 21.5h37.1v24h-80v-24h9.4c-2.7-1.1-11.7-5.5-11.7-19-.1-2.5.2-5.3.8-7.5zM38.7 396.9c0 7.8-6.2 14.2-14 14.2s-14.2-6.4-14.2-14.2c0-7.8 6.4-14 14.2-14 7.8-.1 14 6.2 14 14zm9.5 12.1v-24.3h80V409h-80zM88.5 285h39.8v24.2H88.5c-12.8 0-19.5 4.4-19.5 18.7 0 10.3 8.4 18.1 19 18.3h40.3v24.5H47.9v-24.2h6.4c-.2-.2-9-8.4-9-21.5-.1-33 24.3-40 43.2-40zM48.1 180.2h80.2v24h-6.4c2.3 3 4.2 6.2 5.8 9.7 2.2 5.3 3.3 10.9 3.3 16.7 0 5.9-1.1 11.5-3.3 16.8-2.2 5-5.3 9.7-9.2 13.6-3.9 3.9-8.6 7-13.7 9.2-5.3 2.2-10.9 3.3-16.7 3.3-5.8 0-11.4-1.1-16.7-3.3-5-2.2-9.7-5.3-13.6-9.2-3.9-3.9-7-8.6-9.2-13.6-2.2-5.3-3.4-10.9-3.4-16.8 0-5.8 1.2-11.4 3.4-16.7 1.6-3.4 3.4-6.7 5.8-9.7h-6.2v-24zM88 209c-11.9 0-21.5 9.7-21.5 21.5 0 12 9.7 21.7 21.5 21.7 12 0 21.7-9.7 21.7-21.7 0-11.8-9.7-21.5-21.7-21.5zM96.9 158.8v-26.4c.2 0 13.9-1.1 13.9-19 0-9.7-5.8-18.4-12-18.4-12.9 0-13.9 23.6-15.3 30.3-2.3 11.9-7.6 32-26.8 32-17.9 0-32.6-19.2-32.6-42.6 0-28.5 14.5-42.6 28.1-42.6v25.1c-2.5 0-7.8 4.2-7.8 17.5 0 8.9 5.5 16.2 12.3 16.2 8.3 0 8.3-15.8 9.2-21.4 2.7-14.2 6.1-40.9 32.9-40.9 17.5 0 32.1 20.6 32.1 44.8 0 31.1-20.3 45.4-34 45.4zM116.4 16.9c4.4 0 8.6 2 11.7 5.5 3.1 3.4 4.8 8.1 4.8 12.9 0 5-1.7 9.5-4.8 12.9-3.1 3.7-7.3 5.6-11.7 5.6-4.5 0-8.7-1.9-12-5.6-3-3.4-4.7-8-4.7-12.9 0-4.8 1.7-9.5 4.7-12.9 3.2-3.5 7.5-5.5 12-5.5z"/>
                  </svg>
                </a>
              </div>
              <div className="toggle">
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
                <div className="header-wrapper overlay">
                  <a href="#" className="exit toggle">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </a>
                    <div className="header-left d-flex align-items-center">
                        <nav className="mainmenunav">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','blog','contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="../#home">Home</a></li>
                                <li><a href="../#about">About</a></li>
                                <li><a href="../#portfolio">Portfolio</a></li>
                                <li><a href="../#contact">Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderDetails;
