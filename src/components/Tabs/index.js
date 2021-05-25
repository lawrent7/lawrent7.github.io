import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.scss';

const TabsSection = () => {
  const 
      tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education & Certification";

  return (
    <div className="tabs-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabList>
                <Tab>{tab1}</Tab>
                <Tab>{tab2}</Tab>
                <Tab>{tab3}</Tab>
              </TabList>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/portfolio">User experience design <span> - UI/UX</span></a>
                      Delight the user and make it work.
                    </li>
                    <li>
                      <a href="/portfolio">Web and user interface design<span> - Development</span></a>
                      Websites, blogs, online shops, web experiences.
                    </li>
                    <li>
                      <a href="/portfolio">CSS Master<span> - Styling</span></a>
                      Color the web.
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/service">UI/UX Designer</a>2018 - Current
                    </li>
                    <li>
                      <a href="/service">Front-End Developer</a>2013 - Current
                    </li>
                    <li>
                      <a href="/service">Data Entry Specialist</a>2012-2013
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/service">Cybernetics, Statistics and Economic Informatics<span> - 2011 </span></a>Diploma
                    </li>
                    <li>
                      <a href="/service">Computer Science Certificate<span> - 2008 </span></a>Certification
                    </li>
                    <li>
                      <a href="/service">ECDL – European Computer Driving Licence<span> - 2007 </span></a>Certification
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
