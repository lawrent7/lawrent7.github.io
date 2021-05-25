import React from 'react';
import './style.scss';

const CTA = ({
  text, title, link, label,
}) => {
  return (
    <div className="section cta">
      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <span>{text}</span>
                <h2>{title}</h2>
                <a className="btn btn-secondary" href={link}><span>{label}</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
