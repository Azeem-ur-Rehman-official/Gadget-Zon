import { countries } from 'countries-list';
import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../actions/userActions';
import MetaData from '../layout/MetaData';

const Register = ({ history }) => {
  const countriesList = Object.values(countries);
  const [user, setUser] = useState({
    name: '',
    email: '',

    password: '',
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(
    '/images/default_avatar.jpg'
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error) {
      console.log('error here');
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('avatar', avatar);
    if (name === '' || email === '' || password === '' || avatar === '') {
      alert.show('please fill out all the fields');
    } else {
      dispatch(register(formData));
    }
  };

  const onChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={'Register User'} />
      <div className="container my-5">
        <form
          className="shadow-lg p-4 border-radius-20"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <h1 className="mb-3 text-center">Register</h1>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="form-group">
                <div className="d-flex align-items-center">
                  <figure className="avatar">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                    <input
                      type="file"
                      name="avatar"
                      className="hidden-file-input"
                      id="customFile"
                      accept="images/*"
                      onChange={onChange}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input
                  type="name"
                  id="name_field"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className="text-center mt-5 mb-4">
                <button
                  id="register_button"
                  type="submit"
                  className="order-button px-5"
                  disabled={loading ? true : false}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
