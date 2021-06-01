import React, { Component } from "react";
import PageHelmet from "../../components/Helmet";
import Hero from '../../components/Hero';
import Lightbox from 'react-image-lightbox';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PortfolioItems } from './portfolio';
import './style.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      isOpen: false,
    };
  }

  render() {
    const { item, isOpen } = this.state;

    document.body.classList = '';
    document.body.classList.add('portfolio');

    return (
      <React.Fragment>
        <PageHelmet pageTitle='Laur Portfolio' />
        <div className="portfolio-page" id="portfolio">
          <Hero
            title="My Work"
            imageSrc={require('../../assets/images/hero-portfolio.jpg')}
            overlay="90"
            imageParallaxOffset="0.5"
            titleParallaxOffset="0.5"
          />
          <div className="section portfolio">
            <div className="page-center">
              <div className="portfolio-area">
                <ResponsiveMasonry
                  columnsCountBreakPoints={{0: 1, 992: 2}}
                >
                  <Masonry gutter="8rem">
                    {PortfolioItems.map((value, index) => (
                      <>
                        {isOpen && (
                          <Lightbox
                            mainSrc={PortfolioItems[item].bigImage}
                            nextSrc={PortfolioItems[(item + 1) % PortfolioItems.length]}
                            prevSrc={PortfolioItems[(item + PortfolioItems.length - 1) % PortfolioItems.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                              item: (item + PortfolioItems.length - 1) % PortfolioItems.length,
                            })
                            }
                            onMoveNextRequest={() =>
                              this.setState({
                                item: (item + 1) % PortfolioItems.length,
                              })
                            }
                          />
                        )}
                        <div className="portfolio-item">
                          <div className="portfolio" onClick={() => this.setState({ isOpen: true, item: index })}>
                            <div className="thumbnail">
                              <div className="thumbnail-inner">
                                <a href="#portfolio-details">
                                  <img src={value.bigImage} alt="Portfolio Images" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Portfolio;
