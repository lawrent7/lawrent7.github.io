import React, { useState } from "react";
import { FiDownloadCloud } from "react-icons/fi";
import ReactTooltip from 'react-tooltip';
import { toolsList } from '../../constants/tools';
import PageHelmet from "../../components/Helmet";
import Hero from '../../components/Hero';
import TabsSection from "../../components/Tabs";
import ProgressBars from "../../components/ProgressBar";
import './style.scss';

const About = () => {
  const [tooltip, showTooltip] = useState(true);

  document.body.classList = '';
  document.body.classList.add('about');

  return (
    <React.Fragment>
      <PageHelmet pageTitle='About Laurentiu Cuciureanu | Senior UI Developer' />
      <div className="about-page" id="about">
        <Hero
          title="About Me"
          imageSrc="https://ik.imagekit.io/laurdesign/images/hero-about_IlkjB8EkLF.jpg"
          overlay="90"
          imageParallaxOffset="0.5"
          titleParallaxOffset="0.5"
        />
        <div className="section about">
          <div className="page-center">
            <div className="row">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img src="https://ik.imagekit.io/laurdesign/images/about-laur_r4OcVWLEn.jpg" alt="Laurentiu Cuciureanu"/>
                </div>
                <div className="text-center">
                  <a
                    href="https://ik.imagekit.io/laurdesign/docs/LC_Resume_9LAdYnYHL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-download"
                  >
                    <FiDownloadCloud />
                    {' '}
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner">
                  <p className="description">
                    Since beginning my journey as a freelance designer in 2010, I've done remote work for agencies and collaborated with talented people to create digital products for both business and consumer use. I'm confident, very organized, naturally curious and perpetually working on improving my skills.
                  </p>
                  <div className="row">
                    <TabsSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section tools">
          <div className="tools-inner">
            <div className="page-center">
              <div className="row">
                <div className="logos">
                  {toolsList.map((value, index) => (
                    <span
                      key={index}
                      data-tip={value.name}
                      onMouseEnter={() => showTooltip(true)}
                      onMouseLeave={() => {
                        showTooltip(false);
                        setTimeout(() => showTooltip(true), 50);
                      }}
                    >
                      {value.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section progresses">
          <div className="page-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2>My skills</h2>
                </div>
              </div>
            </div>
            <ProgressBars />
          </div>
        </div>
      </div>
      {tooltip && <ReactTooltip effect="solid" />}
    </React.Fragment>
  );
};

export default About;
