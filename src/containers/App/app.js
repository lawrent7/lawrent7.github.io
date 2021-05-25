import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../../components/Header";
import Homepage from '../Homepage';
import About from "../About";
import Portfolio from "../Portfolio";
import PageNotFound from "../PageNotFound";
import Footer from "../../components/Footer";
import './app.scss';

const App = () => {
  document.body.classList = '';

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
