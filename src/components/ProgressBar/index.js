import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './style.scss';

const ProgressBars = () => {
  return (
    <div className="row progress-bars">
      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">HTML/CSS/Less/SASS/Bootstrap/Flex Grid</h6>
        <ProgressBar now={100} />
        <span className="label">100%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">Photoshop/Illustrator</h6>
        <ProgressBar now={70} />
        <span className="label">70%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">UI/UX/Figma/Adobe XD</h6>
        <ProgressBar now={85} />
        <span className="label">85%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">WordPress/PHP</h6>
        <ProgressBar now={60} />
        <span className="label">60%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">ReactJS/TypeScript</h6>
        <ProgressBar now={50} />
        <span className="label">50%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">Angular</h6>
        <ProgressBar now={40} />
        <span className="label">40%</span>
      </div>

      <div className="col-lg-6 col-sm-6 col-12 single-progress">
        <h6 className="title">Git/Jira/Agile</h6>
        <ProgressBar now={80} />
        <span className="label">80%</span>
      </div>
    </div>
  );
};

export default ProgressBars;
