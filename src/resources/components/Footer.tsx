import '../styles/Footer.css';

import React, { FunctionComponent } from 'react';
import * as PRSS from 'prss';

import prssImg from '../../resources/images/prss-sm.png';

interface IProps {}

const Footer: FunctionComponent<IProps> = () => {
  const { footerLeft, footerRight } = PRSS.getProp('vars');
  const { title } = PRSS.getProp('site');

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            {footerLeft ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: footerLeft
                }}
              ></div>
            ) : (
              <span>© {title}</span>
            )}
          </div>
          <div className="col d-flex justify-content-end">
            {footerRight ? (
              <span>{footerRight}</span>
            ) : (
              <a
                href="https://prss.io"
                className="d-flex align-items-center footer-shoutout"
                target="_blank"
                rel="noopener"
                title="Powered by PRSS Site Creator"
              >
                <img
                  className="prss-footer-image mx-1"
                  src={prssImg}
                  width={15}
                />
                <span className="font-weight-bold prss-tag">PRSS Site Creator</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
