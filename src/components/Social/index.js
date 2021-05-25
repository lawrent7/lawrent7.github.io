import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import './style.scss';

const Social = ({ homeLink }) => {
  const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/laurentiu.cuciureanu'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/laurentiu-cuciureanu'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/lauren7ziu'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/LaurCuciureanu'},
  ]

  return (
    <div className="social-share-inner">
      <ul className="social-share unstyled d-flex justify-content-start">
        {SocialShare.map((val , i) => (
          <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
