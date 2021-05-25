import React from 'react';
import './style.scss';

const PageNotFound = () => {
  document.body.classList = '';
  document.body.classList.add('page-404');

  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h1 className="title">404!</h1>
              <h3 className="sub-title">Page not found</h3>
              <span>The page you were looking for could not be found.</span>
              <div>
                <a className="btn btn-primary" href="/">Back To Homepage</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
