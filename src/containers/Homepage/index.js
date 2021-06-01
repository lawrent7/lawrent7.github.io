import React from 'react'
import { NavLink } from 'react-router-dom';
import TextLoop from "react-text-loop";
import { FiLayers, FiMonitor, FiSmartphone, FiActivity, FiCast, FiCode } from "react-icons/fi";
import PageHelmet from "../../components/Helmet";
import CTA from '../../components/CTA';
import { HomepagePortfolio } from '../Portfolio/portfolio';
import './style.scss';

const Homepage = () => {
  const ServiceList = [
    {
      icon: <FiMonitor />,
      title: 'UI/UX Design',
      description: 'I design and implement products ideas that are useful, easy to use, user friendly and delightful to interact with.'
    },
    {
      icon: <FiCast />,
      title: 'Cross-Platform Design',
      description: 'Cross-platform facilitate developers to have complete mind on one coding base that can run on multiple mobile platforms.'
    },
    {
      icon: <FiLayers />,
      title: 'Mockups & Wireframes',
      description: 'I bring together form and the function to create something that looks good and performs brilliantly. Simple.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Design',
      description: 'I can help you build the right user flow, creating powerful opportunities and providing a competitive advantage.'
    },
    {
      icon: <FiCode />,
      title: 'Website Development',
      description: 'I help brands effectively, efficiently and emotionally deliver their stories to their audiences through full-funnel marketing programs.'
    },
    {
      icon: <FiActivity />,
      title: 'UI/UX Consulting',
      description: 'I rate how well your site or application adheres to best practices and UI principles to make the findings actionable.'
    },
  ]

  document.body.classList = '';
  document.body.classList.add('home-page');

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Laur" />
      <div className="homepage" id="home"> {/* active-dark */}
        <div className="section home-hero">
          <div className="slide designer-portfolio d-flex align-items-center justify-content-center">
            <div className="page-center">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail">
                    <img src={require('../../assets/images/avatar.jpg')} alt="Slider Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="inner">
                    <span>Passionate digital designer</span>
                    <h1 className="title">Hi! I am Laur,<br/>
                      <TextLoop>
                        <span>Web Designer</span>
                        <span>UI/UX Designer</span>
                        <span>Front-End Dev</span>
                      </TextLoop>
                    </h1>
                    <h2>based in Bucharest.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section services">
          <div className="page-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2>What I do...</h2>
                  <p>I follow established design standards, workflows and guidelines and you get the product you need.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              {ServiceList.map( (val , i) => (
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12" key={i}>
                  <div className="service">
                    <div className="icon">
                      {val.icon}
                    </div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTA text="Have a project in mind?" title="How can I help?" link="mailto:contact@laur.design" label="Let's talk!" />
        <div className="section portfolio">
          <div>
            <div className="page-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h2>My latest projects</h2>
                    <p>I bring strategy, design and development together to create captivating user experiences.<br />Below are examples of my work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-latest">
            <div className="page-center">
              <div className="row">
                {HomepagePortfolio.map((value, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="portfolio-item">
                      <div className="portfolio">
                        <div className="thumbnail">
                          <div className="thumbnail-inner">
                            <img src={value.bigImage} alt="Portfolio Images"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <NavLink exact to="/portfolio" className="btn btn-primary">All Projects</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
