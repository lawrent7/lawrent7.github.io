import React from "react";
import { NavLink } from 'react-router-dom';
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Social from '../Social';
import './style.scss';

const Footer = () => {

  const showCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer>
      <div className="footer-left">
        <div className="inner">
          <span>Ready to do this?</span>
          <h2>Let's get <br /> started!</h2>
          <a className="btn btn-secondary" href="mailto:laurentiu.cuciureanu@gmail.com?subject=Let's get started!" target="_blank" rel="noopener noreferrer">Contact Me</a>
        </div>
      </div>
      <div className="footer-right">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="unstyled">
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/portfolio">Work</NavLink></li>
                <li><a href="mailto:laurentiu.cuciureanu@gmail.com?subject=Let's talk!" target="_blank" rel="noopener noreferrer">Let's talk!</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="footer-links">
              <h4>Say Hello!</h4>
              <Social />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>Copyright © {showCurrentYear()}. All Rights Reserved to Laurentiu Cuciureanu.</p>
              <small>Made with <span className="heart">&hearts;</span> in React.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <ScrollToTop showUnder={160} duration={2500} easing="easeInOutQuint">
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </footer>
  );
};

export default Footer;
