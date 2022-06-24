import React from 'react';
import '../css/about.css';
import image from '../images/global-aircon-service-about-us.webp';
const AboutUs = () => {
  return (
    <div>
      {/*  ======= About Section ======= */}
      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div
                className="about-img"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <img src={image} alt="" />
              </div>
            </div>

            <div className="col-lg-7 col-md-6 text-center">
              <div
                className="about-content"
                data-aos="fade-left"
                data-aos-delay="50"
              >
                <h2>About Us</h2>
                <h3 className="text-left">
                  GadgetZon Service is a best company, authenticated and
                  registered from Malaysian Government.
                </h3>
                <p className="text-left">
                  We are aircon service providers everytime for you.
                </p>
                <p className="text-left">
                  GadgetZon hired professional, skilled and experienced workers
                  for you. They know all about aircon services and repair
                  options. They will serve your aircons and repair them with
                  their excited experience. We have trained our team how to talk
                  with disciplanory manner to customers. You will find our team
                  behavior very polite and humble. We had started our work from
                  some places in Kaula Lumpur, Malaysia. But, now a days, we
                  have expand our work to all around Kaula Lumpur, Malaysia. Our
                  team will do for you:
                </p>
                <ul className="text-left">
                  <li>
                    <i className="fa fa-check-circle-o"></i> Basic Cleaning
                    Aircon Service.
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i> Chemical Cleaning
                    Aircon Service.
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i> Repair all types of
                    Aircons.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End About Section */}
    </div>
  );
};

export default AboutUs;
