import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer id="footer" style={{ borderTop: '1px dotted #FFFFFF' }}>
      <div className="container row_spacer">
        <div className="rows_container clearfix">
          <div className="col-md-4">
            <div className="footer_row">
              <h6 className="footer_title">Company Info</h6>
              <span className="footer_param">
                We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds / impurities, and inhibitor reference compounds.
              </span>
              <a href="about-us.php" className="black_button" style={{marginBottom: '10px'}}>
                <i className="ico-angle-right"></i><span>Read More</span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_row">
              <h6 className="footer_title">CONTACT US</h6>
              <p>
                India: <a href="tel:+918849247288">+91-8849247288</a>
              </p>
              <p>
                Email: <a href="mailto:sales@artisbiotech.com">sales@artisbiotech.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_row">
              <h6 className="footer_title">Information</h6>
              <div className="tagcloud clearfix">
                <a href=""><span className="tag">Products</span></a>
                <a href=""><span className="tag">Custom Synthesis</span></a>
                <a href=""><span className="tag">Custom Analysis</span></a>
                <a href=""><span className="tag">Contact Us</span></a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright section */}
        <div className="footer_copyright" >
          <div className="container clearfix">
            <div className="col-md-6">
              <span className="footer_copy_text mt-5">Copyright © 2022 <b>Artis Biotech</b>  All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
