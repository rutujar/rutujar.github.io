import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import resume_doc from 'Resume.pdf';

class ResumeReactEmbed extends Component {
  constructor(props) {
    super(props);
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber } = this.state; /*numPages */
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    var value = 0;
    // if (width > height) value = width * 0.98 * 1.29;
    // else value = (height * 0.98) / 1.29;
    value = width > height ? height : width;
    return (
      <div className="container-fluid mzpz">
        <div className="row fp">
          <div
            style={{
              position: 'fixed',
              left: width > height ? 'auto' : '0',
              top: '0',
              zIndex: '10',
            }}
            className="col-12"
          >
            <a href={resume_doc}>
              <button className="ant-btn ant-btn-primary ">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <Document file={resume_doc} onLoadSuccess={this.onDocumentLoad}>
                {width > height ? (
                  <Page height={value} pageNumber={pageNumber} />
                ) : (
                  <Page width={value} pageNumber={pageNumber} />
                )}
              </Document>
              {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // componentDidUpdate() {
  //   this.props.history.push(resume_doc);
  //   window.location = resume_doc;
  // }
}
export default ResumeReactEmbed;
