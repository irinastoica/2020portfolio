import React from 'react';
import {FaBehance ,FaInstagram , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
  {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/irina-stoica/'},
  {Social: <FaInstagram /> , link: 'https://www.instagram.com/inasnowflake/'},
  {Social: <FaBehance /> , link: 'https://www.behance.net/IrinaStoica'},
]

const FooterTwo = () => {
    return (
        <div className="footer">
          <div className="container justify-content-between">
            <div className="cb-outro-content">
              <div className="cb-outro-body">
                <div className="cb-outro-container">
                  <div className="cb-outro-header">
                    <h2>Have an interesting idea?</h2>
                    <a href="/contact/">Let's chat.</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="inner mt_md--20 mt_sm--20">
                    <div className="email">
                      <a href = "mailto: irinaioanastoica.com">irinaioanastoica@gmail.com</a>
                    </div>
                    <div className="address">
                      <p>198 Ann street suite 512</p>
                      <p>Montreal, QC H3C 0T2, Canada</p>
                    </div>

                    <div className="copyright">
                      <p>Copyright © 2021 Irina Stoica All Rights Reserved.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 social-wrapper">
                  <div className="inner text-center">
                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                      {SocialShare.map((val , i) => (
                        <li key={i}><a  target="_blank" href={`${val.link}`}>{val.Social} </a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default FooterTwo;
