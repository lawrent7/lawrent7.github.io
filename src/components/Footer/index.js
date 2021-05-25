import React from "react";
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
          <h2>Let's get <br /> to work</h2>
          <a className="btn btn-secondary" href="mailto:contact@laur.design">Contact Me</a>
        </div>
      </div>
      <div className="footer-right">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="unstyled">
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Work</a></li>
                <li><a href="mailto:contact@laur.design">Let's Talk</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="footer-links">
              <h4>Say Hello!</h4>
              <ul className="unstyled">
                <li><a href="mailto:contact@laur.design">contact@laur.design</a></li>
              </ul>
              <Social />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>Copyright © {showCurrentYear()} Laurentiu Cuciureanu. All Rights Reserved.</p>
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
