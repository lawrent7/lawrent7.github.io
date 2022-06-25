import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import './style.scss';

const Social = () => {
  const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/laurentiu-cuciureanu'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/lauren7ziu'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/LaurCuciureanu'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/laurentiu.cuciureanu'},
  ]

  return (
    <div className="social-share-inner">
      <ul className="social-share unstyled d-flex">
        {SocialShare.map((val , i) => (
          <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
