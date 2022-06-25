import React from 'react'
import { NavLink } from 'react-router-dom';
import PageHelmet from "../../components/Helmet";
import CTA from '../../components/CTA';
import { homepagePortfolioImages } from '../../constants/portfolio';
import { servicesList } from '../../constants/services';
import './style.scss';

const Homepage = () => {
  document.body.classList = '';
  document.body.classList.add('home-page');

  return (
    <React.Fragment>
      <PageHelmet pageTitle='Laurentiu Cuciureanu | Senior UI Developer' />
      <div className="homepage" id="home"> {/* active-dark */}
        <div className="section home-hero">
          <div className="slide designer-portfolio d-flex align-items-center justify-content-center">
            <div className="page-center">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail">
                    <img src="https://ik.imagekit.io/laurdesign/images/avatar_56nEPoaZ0-.jpg" alt="Laurentiu Cuciureanu" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="inner">
                    <span>"Make it simple, but significant."</span>
                    <h1 className="title">Hi! I am Laur,<br/>
                      <span>Senior UI Developer</span>
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
              {servicesList.map( (val , i) => (
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
        <CTA text="Have a project in mind?" title="How can I help?" link="mailto:laurentiu.cuciureanu@gmail.com?subject=Let's talk!" target="_blank" label="Let's talk!" rel="noopener noreferrer" />
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
                {homepagePortfolioImages.map((value, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="portfolio-item">
                      <img src={value.src} alt={value.alt} title={value.title} />
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
