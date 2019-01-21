import React, { Component } from 'react';
import ResumeReactEmbed from 'pages/ResumeReactEmbed';
import resume_doc from 'Resume.pdf';

class Resume extends Component {
  render() {
    // var site_url = 'https://rutujarajesh.in';
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    return (
      <div className="container-fluid mzpz">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <object height={height} width={width} data={resume_doc} type="application/pdf">
                <ResumeReactEmbed />
              </object>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;
