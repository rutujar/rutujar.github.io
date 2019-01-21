import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'antd/lib/button';
import dp from '2dp.jpg';
import location from 'location.png';

class Home extends Component {
  render() {
    // const Loader = () => (
    //   <div>
    //     <div className="lds-ring" style={{ alignSelf: 'center' }}>
    //       <div /> <div /> <div /> <div />
    //     </div>
    //   </div>
    // );
    const links = [
      ['https://github.com/rutujar', faGithub],
      ['https://www.linkedin.com/in/rutuja-rajesh-20909610b/', faLinkedin],
      // ['mailto:rutujarajesh23@gmail.com', faEnvelope],
    ];
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ borderRadius: '50%', width: '150px' }} src={dp} alt="Rutuja Rajesh" />
            <h1>Rutuja Rajesh</h1>
            <div>
              {links.map((link, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-auto"
                  key={i}
                  href={link[0]}
                >
                  <FontAwesomeIcon icon={link[1]} size="2x" />&nbsp;
                </a>
              ))}
              <a target="_blank" rel="noopener noreferrer" href="https://dev.to/manuhg">
                <img
                  style={{ marginBottom: '10px', width: '25px' }}
                  src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                  alt="Rutuja Rajesh's DEV Profile"
                />
              </a>&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mr-auto"
                href={'mailto:rutujarajesh23@gmail.com'}
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />&nbsp;
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <div style={{ fontSize: '1em', padding: '2px' }}>
                <br />
                Student | Lover | Machine Learning Enthusiast
              </div>
              <div>&nbsp;</div>
              <div style={{ marginBottom: '10px' }}>
                <img src={location} style={{ height: '1.5em' }} alt="Bengaluru, India" /> Bengaluru,
                India<br />
              </div>
              <div>
                <a href="/resume">
                  <Button>Resume</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
