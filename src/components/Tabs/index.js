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
      <div className="page-center">
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
                      <strong>User experience design <span> - UI/UX</span></strong>
                      Delight the user and make it work.
                    </li>
                    <li>
                      <strong>Web and user interface design<span> - Development</span></strong>
                      Websites, blogs, online shops, web experiences.
                    </li>
                    <li>
                      <strong>CSS Master<span> - Styling</span></strong>
                      Color the web.
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <strong>UI/UX Designer</strong>2018 - Current
                    </li>
                    <li>
                      <strong>Front-End Developer</strong>2013 - Current
                    </li>
                    <li>
                      <strong>Data Entry Specialist</strong>2012-2013
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <strong>Cybernetics, Statistics and Economic Informatics<span> - 2011 </span></strong>Diploma
                    </li>
                    <li>
                      <strong>Computer Science Certificate<span> - 2008 </span></strong>Certification
                    </li>
                    <li>
                      <strong>ECDL – European Computer Driving Licence<span> - 2007 </span></strong>Certification
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
