import React from "react";
import { FaLess, FaSass, FaSourcetree } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import {
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiReact, SiTypescript, SiAngular, SiPhp, SiWordpress, SiGithub, SiBitbucket, SiJira, SiAdobexd, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiVisualstudio, SiVisualstudiocode, SiMaterialUi, SiMaterialdesign, SiFontawesome,
} from "react-icons/si";
import PageHelmet from "../../components/Helmet";
import Hero from '../../components/Hero';
import TabsSection from "../../components/Tabs";
import ProgressBars from "../../components/ProgressBar";
import './style.scss';

const About = () => {
  document.body.classList = '';
  document.body.classList.add('about');

  return (
    <React.Fragment>
      <PageHelmet pageTitle='About Laur' />
      <div className="about-page" id="about">
        <Hero
          title="About Me"
          imageSrc={require('../../assets/images/hero-about.jpg')}
          overlay="90"
          imageParallaxOffset="0.5"
          titleParallaxOffset="0.5"
        />
        <div className="section about">
          <div className="page-center">
            <div className="row">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img src={require('../../assets/images/about-laur.jpg')} alt="Laurentiu Cuciureanu"/>
                </div>
                <div className="text-center">
                  <a
                    href={require('../../assets/docs/LC_Resume.pdf')}
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
                  <SiHtml5 />
                  <SiCss3 />
                  <FaLess />
                  <FaSass />
                  <SiTailwindcss />
                  <SiBootstrap />
                  <SiMaterialUi />
                  <SiMaterialdesign />
                  <SiFigma />
                  <SiAdobexd />
                  <SiFontawesome />
                  <SiReact />
                  <SiTypescript />
                  <SiAngular />
                  <SiPhp />
                  <SiWordpress />
                  <SiGithub />
                  <SiBitbucket />
                  <FaSourcetree />
                  <SiJira />
                  <SiAdobephotoshop />
                  <SiAdobeillustrator />
                  <SiVisualstudio />
                  <SiVisualstudiocode />
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
    </React.Fragment>
  );
};

export default About;
