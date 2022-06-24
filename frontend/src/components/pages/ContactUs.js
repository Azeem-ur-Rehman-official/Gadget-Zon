import React, { Component } from 'react';
import '../css/contact.css';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      message: '',
      city: '',
    };
  }

  updateName = (evt) => {
    this.setState({ name: evt.target.value });
  };

  updateSubject = (evt) => {
    this.setState({ subject: evt.target.value });
  };

  updateMessage = (evt) => {
    this.setState({ message: evt.target.value });
  };

  render() {
    return (
      <div>
        {/*  ======= contact ======= */}
        <div id="contact" className="section-bg my-5">
          <div className="contact-top">
            <div className="container contact-bg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="contact-links">
                        <h4 className="form-heading">Contact Us</h4>
                        <p>
                          <strong>Head Office:</strong>
                          <br />
                          24, JALAN TAGO 10, <br />
                          TAMAN PERINDUSTRIAN KIP, <br />
                          52200 KUALA LUMPUR, <br />
                          SELANGOR, MALAYSIA <br />
                          <br />
                          <strong>Branch Address:</strong>
                          <br />
                          9 - G , 9-1 JALAN ARA <br />
                          2 PUSAT PERDAGANGAN ARA <br />
                          44300 BATANG KALI, 44300 BANTKALI, <br />
                          SELANGOR, MALAYSIA <br />
                          <br />
                          <strong>Phone:</strong>
                          <a href="tel:+60 11-2340 0748"> +60 11-2340 0748</a>
                          <br />
                          <strong>Email:</strong>
                          <a href="mailto:info@globalaircond.com">
                            {' '}
                            info@globalaircond.com
                          </a>
                          <br />
                        </p>
                      </div>

                      <div className="social-links">
                        <a
                          href="https://twitter.com/AircondGlobal?s=08"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="twitter"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/globalaircondservice"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/aircondglobal/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="instagram"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/global-aircon-a99187201"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form">
                    <h4 className="form-heading">Send us a message</h4>
                    <p>
                      We will read your message and make value to your message.
                      We will improve ourself by taking feedback from your site.
                    </p>

                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                          onChange={this.updateName}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                          onChange={this.updateSubject}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="6"
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                          onChange={this.updateMessage}
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <a
                          href={
                            'https://wa.me/+923176418877?text=Hello%20Gadget%20Zon!_%0aI%20am%20*' +
                            this.state.name +
                            '*.%0aSubject%20:%20' +
                            this.state.subject +
                            '%0aMessage%20:%20' +
                            this.state.message
                          }
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Send Message"
                        >
                          Send Message
                          <i className="fa fa-whatsapp ml-2"></i>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  End  contact */}
      </div>
    );
  }
}

export default ContactUs;
