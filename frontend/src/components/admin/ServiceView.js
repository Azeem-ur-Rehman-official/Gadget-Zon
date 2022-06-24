import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';
import { postData } from '../../routes/FetchData';
import MetaData from '../layout/MetaData';
import Sidebar from './Sidebar';
const ServiceView = (props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [segment, setSegment] = useState('None');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('none');
  const [noAirconditionar, setNoAirconditionar] = useState('');
  const [conditionarType, setConditionarType] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('');
  const [channels, setchannels] = useState('');
  const [comment, setComment] = useState('');
  const alert = useAlert();
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    const id = props.match.params.id;

    postData(`/api/v1/admin/single/service`, { id })
      .then((res) => {
        setId(res.data.service._id);
        setName(res.data.service.name);
        setEmail(res.data.service.email);
        setPhoneNo(res.data.service.phoneNo);
        setSegment(res.data.service.segment);
        setAddress(res.data.service.address);
        setDate(res.data.service.date);
        setEstimatedTime(res.data.service.estimatedTime);
        setNoAirconditionar(res.data.service.noAirconditionar);
        setConditionarType(res.data.service.conditionarType);
        setServiceNeeded(res.data.service.serviceNeeded);
        setchannels(res.data.service.channels);
        setComment(res.data.service.comment);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        alert.show('somthing went wrong');
      });
  }, []);
  return (
    <Fragment>
      <MetaData title={'View Services'} />
      <div className="row m-0">
        <div className="col-12 col-md-2 m-0 p-0">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="d-flex mt-5">
              <h5 className=" ml-3  w-25">Services ID</h5>
              <p>{id}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Name</h5>
              <p>{name}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Email</h5>
              <p>{email}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Phone no</h5>
              <p>{phoneNo}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Segment</h5>
              <p>{segment}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Address</h5>
              <p>{address}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Date</h5>
              <p>{date}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Estimated Time</h5>
              <p>{estimatedTime}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">No of Airconditionar</h5>
              <p>{noAirconditionar}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Conditionar Type</h5>
              <p>{conditionarType}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Service Needed</h5>
              <p>{serviceNeeded}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Channels</h5>
              <p>{channels}</p>
            </div>
            <div className="d-flex my-2">
              <h5 className=" ml-3  w-25">Comment</h5>
              <p>{comment}</p>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(ServiceView);
