import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import { portfolioImages } from '../../constants/portfolio';
import PageHelmet from "../../components/Helmet";
import Hero from '../../components/Hero';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import './style.scss';

const Portfolio = () => {
  const [tooltip, showTooltip] = useState(true);

  document.body.classList = '';
  document.body.classList.add('portfolio');

  const options = {
    bgOpacity: 0.9,
    zoom: false,
    showHideAnimationType: 'zoom',
    imageClickAction: 'none'
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle='Portfolio of Laurentiu Cuciureanu | Senior UI Developer' />
      <div className="portfolio-page" id="portfolio">
        <Hero
          title="My Work"
          imageSrc="https://ik.imagekit.io/laurdesign/images/hero-portfolio_wUFbDs7W_0.jpg"
          overlay="90"
          imageParallaxOffset="0.5"
          titleParallaxOffset="0.5"
        />
        <div className="section portfolio">
          <div className="page-center">
            <div className="portfolio-area">
              <Gallery options={options}>
                {portfolioImages.map((value, index) => (
                  <Item
                    key={index} 
                    original={value.original}
                    width={value.width}
                    height={value.height}
                  >
                    {({ ref, open }) => (
                      <div className="portfolio-item" ref={ref} onClick={open}>
                        <img
                          src={value.thumbnail}
                          alt={value.alt}
                          title={value.title}
                        />
                        <div className="description">
                          <div className="title">{value.title}</div>
                          <div className="tools">
                            { value.tools.map((tool, index) => (
                              <span
                                key={index}
                                data-tip={tool.name}
                                onMouseEnter={() => showTooltip(true)}
                                onMouseLeave={() => {
                                  showTooltip(false);
                                  setTimeout(() => showTooltip(true), 50);
                                }}
                              >
                                {tool.icon}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Item>
                ))}
              </Gallery>
            </div>
          </div>
        </div>
      </div>
      {tooltip && <ReactTooltip effect="solid" />}
    </React.Fragment>
  )
}

export default Portfolio;
