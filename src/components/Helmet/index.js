import React from "react";
import { Helmet } from 'react-helmet';

const PageHelmet = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default PageHelmet;
