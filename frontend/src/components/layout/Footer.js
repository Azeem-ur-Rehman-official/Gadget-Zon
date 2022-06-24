import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className="page-footer font-small mdb-color pt-4 ">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                GadgetZon
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-1 mx-auto mt-3"></div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/blogs">Blogs</Link>
              </p>
              <p>
                <Link to="/discusion">Discussion Forum</Link>
              </p>
              <p>
                <Link to="/faq">FAQs</Link>
              </p>
              <p>
                <Link to="/contactus">Contact Us</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <HomeIcon style={{ fontSize: 22 }} />{' '}
                <strong>Head Office:</strong> <br />
                24, JALAN TAGO 10, TAMAN PERINDUSTRIAN KIP, 52200 KUALA LUMPUR,
                SELANGOR, MALAYSIA
              </p>
              <p>
                <EmailIcon style={{ fontSize: 22 }} />
                <Link to="mailto:info@globalaircond.com">
                  {' '}
                  info@globalaircond.com
                </Link>
              </p>
              <p>
                <PhoneIcon style={{ fontSize: 22 }} />{' '}
                <Link to="tel:+60 11-2340 0748">+60 11-2340 0748</Link>
              </p>
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © {new Date().getFullYear()} Copyright:
                <Link to="https://www.globalaircond.com">
                  <strong> globalaircond.com</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
