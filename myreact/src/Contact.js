import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div>
            <section className="content_section white_section page_title has_bg_image bg_header4 enar_parallax">
                <div className="content clearfix">
                    <h1 className="">Contact Us</h1>
                    <div className="breadcrumbs">
                        <a href="index.html">Home</a>
                        <span className="crumbs-spacer"><i className="ico-angle-right"></i></span>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </section>

            <section className="content_section mt-5">
                <div className="content row_spacer no_padding">
                    <div className="rows_container clearfix">
                        <div className="col-md-6">
                            <h2 className="title1 upper"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>Contact Information</h2>

                            <div className="contact_details_row clearfix">
                                <div className="c_con">
                                    <span className="c_title">INDIA</span>
                                    <span className="c_detail">
                                        <span className="c_name">Tel:</span><span className="c_desc"><a href="tel:+918849247288">+918849247288</a> / <a href="tel:+918793715125">+918793715125</a></span><br />
                                        <span className="c_name">Email: </span><span className="c_desc"><a href="mailto:sales@artisbiotech.com">sales@artisbiotech.com</a></span><br />
                                        <span className="c_name">Artis Biotech India LLP.:</span> <span className="c_desc">1-Park View, Plot No. 1-3, Survey No. 156/2P, 79/2P, Palghar East, Maharashtra, India-401404</span>
                                    </span>
                                </div>
                            </div>

                            <div className="contact_details_row clearfix">
                                <div className="c_con">
                                    <span className="c_title">CHINA</span>
                                    <span className="c_detail">
                                        <span className="c_name">Tel:</span><span className="c_desc"><a href="tel:+918849247288">+918849247288</a> / <a href="tel:+918793715125">+918793715125</a></span><br />
                                        <span className="c_name">Email: </span><span className="c_desc"><a href="mailto:sales@artisbiotech.com">sales@artisbiotech.com</a></span><br />
                                        <span className="c_name">Artis Biotech India LLP.:</span> <span className="c_desc">5th Floor, Building No. 2, No. 381, Haike Rd. West, Wenjiang Medical City, Wenjiang, Chengdu, China 611137</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 className="title1 upper"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>Get On Touch</h2>
                            <form id="contact-us-form" className="hm_contact_form" action="pro_enquiry.php" method="post" noValidate>
                                <div className="form_row clearfix">
                                    <label htmlFor="contact-us-name">
                                        <span className="hm_field_name">Name</span>
                                        <span className="hm_requires_star">*</span>
                                    </label>
                                    <input className="form_fill_fields hm_input_text form control" type="text" name="name" id="contact-us-name" placeholder="Full Name" required aria-required="true" />
                                </div>
                                <div className="form_row clearfix">
                                    <label htmlFor="contact-us-mail">
                                        <span className="hm_field_name">Email</span>
                                        <span className="hm_requires_star">*</span>
                                    </label>
                                    <input className="form_fill_fields hm_input_text" type="email" name="email" id="contact-us-mail" placeholder="mail@sitename.com" required aria-required="true" />
                                </div>
                                <div className="form_row clearfix">
                                    <label htmlFor="contact-us-phone">
                                        <span className="hm_field_name">Phone</span>
                                    </label>
                                    <input className="form_fill_fields hm_input_text" type="text" name="phone" id="contact-us-phone" />
                                </div>
                                <div className="form_row clearfix">
                                    <label htmlFor="contact-us-subject">
                                        <span className="hm_field_name">Product</span>
                                    </label>
                                    <input className="form_fill_fields hm_input_text" type="text" name="product" id="contact-us-subject" />
                                </div>
                                <div className="form_row clearfix">
                                    <label htmlFor="contact-us-message">
                                        <span className="hm_field_name">Message</span>
                                        <span className="hm_requires_star">*</span>
                                    </label>
                                    <textarea className="form_fill_fields hm_textarea" name="message" id="contact-us-message" required aria-required="true"></textarea>
                                </div>
                                <div className="form_row clearfix">
                                    <input type="hidden" name="sendContact" value="submit" />
                                    <button className="g-recaptcha send_button full_button" type="submit" data-callback="onContactUsSubmit" data-sitekey="6LcxTz8hAAAAADEzLEcZ5t5lFmLPxo_xJ6eEnHkR" data-action="submit" id="contact-us-submit" value="submit">
                                        <i className="ico-check3"></i>
                                        <span>Send Your Message</span>
                                    </button>
                                </div>
                                <div className="form_row clearfix">
                                    <div id="form-messages"></div>
                                </div>
                                <div className="form_loader"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

