import React, { useEffect, useState } from 'react';
import ScrollDown from '../ScrollDown';
import './style.scss';

const Hero = ({
  overlay, imageSrc, imageParallaxOffset, title, titleParallaxOffset,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div
      className="section hero"
      gradient-overlay={overlay}
      style={{
        backgroundImage: "url(" + imageSrc + ")",
        backgroundPositionY: `${offset * imageParallaxOffset}px`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title" style={{ top: `${offset * titleParallaxOffset}px` }}>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ScrollDown text="Scroll Down" style={{ opacity: offset > 400 ? '0' : '1' }} />
    </div>
  );
};

export default Hero;
