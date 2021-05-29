import React, { Component } from "react";
import {FaBehance ,FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/irina-stoica/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/inasnowflake/'},
    {Social: <FaBehance /> , link: 'https://www.behance.net/IrinaStoica'},
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
              <div className="logo--mobile">
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.6 147.3">
                    <path d="M38.8,26.2v101.4H14.5V26.2H38.8z M117.6,46v20.4c-1.6-0.3-3.3-0.5-5-0.5c-11.5,0-21.5,8.9-21.5,24.5v37.1h-24v-80h24v9.4 c1.1-2.7,5.5-11.7,19-11.7C112.6,45.1,115.4,45.4,117.6,46z M141.6,38.1c-7.8,0-14.2-6.2-14.2-14s6.4-14.2,14.2-14.2 c7.8,0,14,6.4,14,14.2C155.7,31.9,149.4,38.1,141.6,38.1z M129.5,47.6h24.3v80h-24.3C129.5,127.6,129.5,47.6,129.5,47.6z M253.5,87.9v39.8h-24.2V87.9c0-12.8-4.4-19.5-18.7-19.5c-10.3,0-18.1,8.4-18.3,19v40.3h-24.5V47.3H192v6.4c0.2-0.2,8.4-9,21.5-9 C246.5,44.6,253.5,69,253.5,87.9z M358.3,47.5v80.2h-24v-6.4c-3,2.3-6.2,4.2-9.7,5.8c-5.3,2.2-10.9,3.3-16.7,3.3 c-5.9,0-11.5-1.1-16.8-3.3c-5-2.2-9.7-5.3-13.6-9.2c-3.9-3.9-7-8.6-9.2-13.7c-2.2-5.3-3.3-10.9-3.3-16.7c0-5.8,1.1-11.4,3.3-16.7 c2.2-5,5.3-9.7,9.2-13.6c3.9-3.9,8.6-7,13.6-9.2c5.3-2.2,10.9-3.4,16.8-3.4c5.8,0,11.4,1.2,16.7,3.4c3.4,1.6,6.7,3.4,9.7,5.8v-6.2 L358.3,47.5L358.3,47.5z M329.5,87.4c0-11.9-9.7-21.5-21.5-21.5c-12,0-21.7,9.7-21.7,21.5c0,12,9.7,21.7,21.7,21.7 C319.8,109.1,329.5,99.4,329.5,87.4z M379.7,96.3h26.4c0,0.2,1.1,13.9,19,13.9c9.7,0,18.4-5.8,18.4-12c0-12.9-23.6-13.9-30.3-15.3 c-11.9-2.3-32-7.6-32-26.8c0-17.9,19.2-32.6,42.6-32.6c28.5,0,42.6,14.5,42.6,28.1h-25.1c0-2.5-4.2-7.8-17.5-7.8 c-8.9,0-16.2,5.5-16.2,12.3c0,8.3,15.8,8.3,21.4,9.2c14.2,2.7,40.9,6.1,40.9,32.9c0,17.5-20.6,32.1-44.8,32.1 C394,130.3,379.7,110,379.7,96.3L379.7,96.3z M521.6,115.8c0,4.4-2,8.6-5.5,11.7c-3.4,3.1-8.1,4.8-12.9,4.8c-5,0-9.5-1.7-12.9-4.8 c-3.7-3.1-5.6-7.3-5.6-11.7c0-4.5,1.9-8.7,5.6-12c3.4-3,8-4.7,12.9-4.7c4.8,0,9.5,1.7,12.9,4.7C519.6,107,521.6,111.3,521.6,115.8z"/>
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
                                <li><a href="../contact">Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
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
