
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
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

export default App;


C:\Users\SHUBHAM\OneDrive\Desktop\project\myreact


{/* <div className="footer_copyright" style={{ background: '#191E21', paddingTop: '10px', marginTop: '20px' }}>
<div className="container clearfix">
  <div className="col-md-6">
    <span className="footer_copy_text mt-5">Copyright © 2022 <b>Artis Biotech</b>  All Rights Reserved</span>
  </div>
</div>
</div> */}

         {/* Chat icon
  <button type="button" className="tawk-custom-color tawk-custom-border-color tawk-button tawk-button-circle tawk-button-large" tabIndex="0" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1000', border: '0px' }}>
    <div isroundwidget="true">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="50px" width="50px" role="img" alt="Chat icon" className="tawk-min-chat-icon" style={{ fill: '#4FA2FF',  background: '#191E21'}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"></path>
        </svg>
      </div>
    </div>
  </button> */}