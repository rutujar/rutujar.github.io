import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Resume from 'pages/Resume';
// import resume_doc from 'Resume.pdf';

import 'css/loader.css';
import 'css/App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/resume" component={() => (window.location = resume_doc)} /> */}
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
  // updateDimensions() {
  //   var w = window,
  //     d = document,
  //     documentElement = d.documentElement,
  //     body = d.getElementsByTagName('body')[0],
  //     width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
  //     height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

  //   this.setState({ width, height });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions);
  // }
  // componentDidMount() {
  //   window.addEventListener('resize', this.updateDimensions.bind(this));
  // }
}

export default App;
