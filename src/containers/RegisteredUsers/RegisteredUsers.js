import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import SearchBar from 'components/atoms/SearchBar';
import Table from 'components/atoms/Table';
import Headding from 'components/atoms/Headding';
import Modal from '@material-ui/core/Modal';
import { callAPI } from '../../helper/apiUtils';

import './style.css';
import { Field, Form, Formik } from 'formik';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import * as Yup from 'yup';

const RegisteredUsers = ({ getRegisteredUsers, users }) => {
  const [assignToInputModalVisible, toggleAssignToInputModal] = useState(false);
  const [userDetails, updateUserData] = useState({});
  const [messageVisible, toggleMessage] = useState({ visible: false, message: '', type: '' });

  const removeMessage = () => {
    setTimeout(() => toggleMessage({ visible: false, message: '', type: '' }), 5000);
  };

  const getRegisteredUsersList = () => {
    getRegisteredUsers();
  };

  React.useEffect(() => {
    getRegisteredUsersList();
  }, []);

  const assignedUser = (userData) => {
    toggleAssignToInputModal(true);
    updateUserData(userData);
  };

  const approveUser = (userData) => {
    callAPI('/digi-userregistration-decision', {}, 'POST', { email: userData.email }).then(() => {
      toggleMessage({ visible: true, message: 'User approved successfully', type: 'success' });
      removeMessage();
      getRegisteredUsersList();
    });
  };

  const denyUser = (userData) => {
    callAPI('/digi-userregistration-decision', {}, 'DELETE', { email: userData.email }).then(() => {
      toggleMessage({ visible: true, message: 'User denied successfully', type: 'success' });
      removeMessage();
      getRegisteredUsersList();
    });
  };

  const getFormattedDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (date) {
      const todayTime = new Date(date.split(' ')[0]);
      const month = months[todayTime.getMonth()];
      const day = todayTime.getDate();
      const year = todayTime.getFullYear();
      return `${day} ${month} ${year}`;
    }
    return '';
  };

  return (
    <Widget style={{ margin: 30 }}>
      <Space size={10} />
      {messageVisible.visible && (
        <div style={{
          width: 400, margin: '0 auto', position: 'fixed', top: 0, left: '30%',
        }}
        >
          <Space size={60} />
          <Alert severity={messageVisible.type || 'success'}>{messageVisible.message}</Alert>
        </div>
      )}
      <Grid container justify="space-between">
        <Headding as="h4" bold title="User management with process Sign-Up requests for BreweryDB" />
        <SearchBar />
      </Grid>
      <Space size={20} />
      <Table headers={['Name', 'Email', 'Brewery', 'Requested role', 'Received', 'Status', 'Assign To', 'Assigned to', 'Action']}>
        {users.map((row, i) => (
          <tr key={i}>
            <td>{`${row.firstName}, ${row.lastName}`}</td>
            <td>{row.email}</td>
            <td>{row.breweryName}</td>
            <td>{row.role}</td>
            <td>{getFormattedDate(row.requestTimeStamp)}</td>
            <td>{row.status}</td>
            <td>{row.assignTo}</td>
            <td style={{ width: 150 }}>
              <div className="table-action">
                <p onClick={() => assignedUser(row)}>Assigned</p>
              </div>
            </td>
            <td style={{ width: 120 }}>
              <div className="table-action">
                <p onClick={() => approveUser(row)}>approve</p>
                <p onClick={() => denyUser(row)}>deny</p>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      <Space size={30} />
      <Modal open={assignToInputModalVisible}>
        <div
          onClick={() => {
            toggleAssignToInputModal(false);
            updateUserData({});
          }}
          className="modal-container"
        >
          <div onClick={(e) => e.stopPropagation()} className="modal">
            <Formik
              onSubmit={(values) => {
                callAPI('/digi-update-user-registration', {}, 'POST', {
                  ...userDetails,
                  assignTo: values.assignTo,
                }).then((response) => {
                  if (response.data.Error) {
                    toggleMessage({ visible: true, message: response.data.Error.Message, type: 'error' });
                    removeMessage();
                  } else {
                    toggleMessage({ visible: true, message: 'User assigned successfully', type: 'success' });
                    removeMessage();
                  }
                  getRegisteredUsersList();
                  toggleAssignToInputModal(false);
                  updateUserData({});
                });
              }}
              initialValues={{ assignTo: '' }}
              validationSchema={Yup.object().shape({
                assignTo: Yup.string().required(),
              })}
              enableReinitialize
            >
              {() => (
                <Form>
                  <Grid
                    style={{
                      margin: '0 auto',
                    }}
                    container
                    spacing={2}
                  >
                    <Grid item xs={6}>
                      <Field component={Input} name="assignTo" label="Assign To" required placeholder="Enter Name" />
                    </Grid>
                    <Grid className="button-container" item xs={6}>
                      <Button logixBlue size="small" type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </Widget>
  );
};

RegisteredUsers.propTypes = {
  getRegisteredUsers: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape()),
};

export default RegisteredUsers;
