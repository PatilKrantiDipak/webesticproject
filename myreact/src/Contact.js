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

            <section className="content_section">
                <div className="content row_spacer no_padding">
                    <div className="rows_container clearfix">
                        <div className="col-md-6">
                            <h2 className="title1 upper"><i className="ico-pencil5"></i>Contact Information</h2>

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
                            <h2 className="title1 upper"><i className="ico-envelope3"></i>Get On Touch</h2>
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

