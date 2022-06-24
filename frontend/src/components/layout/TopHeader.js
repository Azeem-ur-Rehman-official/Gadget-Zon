import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import logo from '../../assets/img/logo.png';

const TopHeader = () => {
  const [valid, setValid] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [userdata, setUserdata] = useState(null);
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.');
    window.location.reload(true);
  };

  return (
    <div className="top-header-area" id="top-header-area">
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-6 d-flex">
            <div className="top-header-content my-auto d-none d-md-block">
              <span>
                <i className="flaticon-check"></i>
                Free shipping on all orders over $50
              </span>
            </div>
            <div className="middle-header-logo d-block d-md-none">
              <Link to="/">
                <img
                  src={logo}
                  alt="GadgetZon"
                  className="img-fluid"
                  style={{
                    maxHeight: '45px',
                    backgroundColor: 'white',
                    padding: '4px',
                    borderRadius: '5px',
                  }}
                />
              </Link>
            </div>
          </div>

          <div className="col-9 col-sm-6 text-right">
            <ul className="top-header-optional">
              <li>
                {user ? (
                  <div className="d-flex">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn dropdown-toggle text-white media"
                        type="button"
                        id="dropDownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ paddingRight: '2rem' }}
                      >
                        <img
                          className="mr-3"
                          style={{
                            maxHeight: '30px',
                            borderRadius: '50%',
                            border: '1px solid #F8921C',
                          }}
                          src={user.avatar && user.avatar.url}
                          alt={user && user.name}
                        />
                        <div className="media-body my-auto">
                          <h5 className="mt-0 text-light">
                            {user && user.name}
                          </h5>
                        </div>
                      </Link>

                      <div
                        className="dropdown-menu text-dark"
                        aria-labelledby="dropDownMenuButton"
                      >
                        {user && user.role === 'admin' && (
                          <Link className="dropdown-item" to="/dashboard">
                            Dashboard
                          </Link>
                        )}
                        <Link className="dropdown-item" to="/orders/me">
                          Orders
                        </Link>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                        <Link
                          className="dropdown-item text-danger"
                          to="/"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  !loading && (
                    <div style={{ minWidth: '125px' }}>
                      <Link to="/login" className="text-light">
                        <i className="fa fa-lock"></i>
                        Login
                      </Link>
                      {'  |  '}
                      <Link to="/register" className="text-light">
                        Register
                      </Link>
                    </div>
                  )
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopHeader);
