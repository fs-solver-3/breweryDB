import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import { sortPlainArrayOfObjects } from 'helper/utility';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import SearchBar from 'components/atoms/SearchBar';
import Table from 'components/atoms/Table';
import { Formik, Form, Field } from 'formik';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { resetMemberDeletionData } from 'redux/teamMembers/actionCreators';
import { callAPI } from '../../helper/apiUtils';
import Input from '../../components/atoms/Input';
import Select from '../../components/atoms/Select';
import { championRoles, USStates } from '../../helper/constants';
import { initialValues, validationSchema } from './helper';

const TeamMembers = (props) => {
  const {
    deleteUser, getCountries, fetching, userDetails, fetchUsersList, fetchMembersList, teamMembers
  } = props;

  const [userList, updateUserList] = useState([]);
  const [filteredUsersData, updateFilteredUsersData] = useState([]);
  const [addMemberFormVisible, toggleMemberForm] = useState(false);
  const [countriesList, updateCountriesList] = useState([]);
  const [currentSortBy, setCurrentSortBy] = useState('');
  const [isRemoveUserModalOpen, setIsRemoveUserModalOpen] = useState(false);
  const [userToBeDeleted, setUserToBeDeleted] = useState(null);

  // useEffect(() => {
  // if (userDetails.breweryId) {
  //     callAPI(`/digi-list-users?customerId=${userDetails.breweryId}`, {}, 'GET').then(response => {
  //         updateUserList(response.data);
  //         console.log(userList);
  //     });
  // }
  // }, [userDetails.breweryId]);

  const fetchMembersData = () => {
    if (!fetching) {
      fetchMembersList({ orgId: userDetails.breweryId }).then(response => {
        let usersData = response.value.data.Users || [];

        usersData = usersData.map((user) => {
          user.fullName = `${user['custom:last_name']} ${user['custom:first_name']}`;

          return user;
        });

        updateUserList(usersData);
        updateFilteredUsersData(usersData);
      });
    }
  };

  useEffect(() => {
    fetchMembersData();
  }, [userDetails]);

  useEffect(() => {
    fetchMembersData();
  }, [teamMembers.memberDeletionSuccess]);

  useEffect(() => {
    getCountries().then(response => {
      updateCountriesList(response.value.data);
    });
  }, [userDetails]);

  const toggleAddMemberForm = flag => {
    toggleMemberForm(flag);
  };

  const onUserSearch = (e) => {
    const userInput = e.target.value;

    updateFilteredUsersData(userList.filter((user) => (
      user.fullName.toLowerCase().includes(userInput.toLowerCase())
    )));
  };

  const sortData = (sortBy) => {
    const allowedSorting = {
      Name: 'fullName',
      'Email Address': 'email',
      'Location(s)': 'locale'
    };
    const sortingKey = allowedSorting[sortBy];

    if (!sortingKey) {
      return;
    }

    if (sortingKey && sortBy === currentSortBy) {
      updateFilteredUsersData([...filteredUsersData.reverse()]);
      return;
    }

    setCurrentSortBy(sortBy);
    sortPlainArrayOfObjects(filteredUsersData, sortingKey, updateFilteredUsersData);
  };

  const showPromptToRemoveUser = (user) => {
    setUserToBeDeleted(user);
    setIsRemoveUserModalOpen(true);
  };

  const closeRemoveUserModal = () => {
    setIsRemoveUserModalOpen(false);
    setUserToBeDeleted(null);
  };

  const removeUser = () => {
    deleteUser(userToBeDeleted);
    setUserToBeDeleted(null);
    setIsRemoveUserModalOpen(false);
  };

  return (
    <Widget title="Your Team Members">
      <Space size={10} />
      <Grid container justify="flex-end">
        <SearchBar
          onChange={onUserSearch}
        />
      </Grid>
      <Space size={20} />
      <Table
        headers={['Name', 'Email Address', 'Champion', 'Location(s)', 'Manage Location Access', 'Action']}
        onHeaderClick={sortData}
      >
        {filteredUsersData.slice(0, 7).map((row, i) => (
          <tr key={i}>
            <td>
              {row.fullName}
            </td>
            <td>{row.email || ''}</td>
            <td>{row.beer_love || ''}</td>
            <td>
              {!row.locale ? (
                <Button size="xsmall" bold>
                  Pending
                </Button>
              ) : (
                  row.locale
                )}
            </td>
            <td>
              <div className="table-action">
                {i !== 0 && i !== 1 && (
                  <p className="location-access-button">
                    Location Access
                    <MoreVertIcon style={{ color: '#6f91b1', fontSize: '20px' }} />
                  </p>
                )}
              </div>
            </td>
            <td style={{ width: 250 }}>
              <div className="table-action">
                <p onClick={() => showPromptToRemoveUser(row)}>Remove User</p>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      <Space size={30} />
      <Grid container justify="space-around">
        <Link to="/team_members" component={Button} size="large" seafoamBlue bold>
          View All Team Members
        </Link>
        <Button onClick={() => toggleAddMemberForm(true)} bold size="large">
          Invite a Team Member
        </Button>
      </Grid>

      <Modal open={addMemberFormVisible}>
        <div onClick={() => toggleAddMemberForm(false)} className="modal-container">
          <div onClick={e => e.stopPropagation()} className="modal">
            <div className="heading">Add a Team Member</div>
            <Formik
              onSubmit={values => {
                callAPI('/digi-cognito-adminCreateUser', {}, 'POST', values).then(() => {
                  toggleAddMemberForm(false);
                });
              }}
              initialValues={initialValues}
              validationSchema={validationSchema[0]}
              enableReinitialize>
              {props => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="content-section">
                      <span className="section-title">Personal Details</span>
                      <Grid
                        style={{
                          margin: '0 auto',
                        }}
                        container
                        spacing={2}>
                        <Grid item xs={6}>
                          <Field
                            component={Input}
                            name="firstName"
                            label="First Name"
                            required
                            placeholder={errors.firstName && touched.firstName ? errors.firstName : 'Enter Name'}
                            className={errors.firstName && touched.firstName ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            component={Input}
                            name="lastName"
                            label="Last Name"
                            required
                            placeholder={errors.lastName && touched.lastName ? errors.lastName : 'Enter Name'}
                            className={errors.lastName && touched.lastName ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            component={Input}
                            name="email"
                            label="Work Email"
                            required
                            placeholder={errors.email && touched.email ? errors.email : 'eg: john.doe@gmail.com'}
                            className={errors.email && touched.email ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            component={Input}
                            name="cellPhone"
                            label="Mobile Number"
                            placeholder="9876576xxx"
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            component={Input}
                            name="workPhone"
                            label="Work Phone"
                            required
                            placeholder={errors.workPhone && touched.workPhone ? errors.workPhone : '9876576xxx'}
                            className={errors.workPhone && touched.workPhone ? 'input-error-field' : ''}
                          />
                        </Grid>
                      </Grid>
                      <span className="section-title">Brewery Details</span>
                      <Grid
                        style={{
                          margin: '0 auto',
                        }}
                        container
                        spacing={2}>
                        <Grid item xs={9}>
                          <Field
                            component={Input}
                            name="breweryName"
                            label="Brewery Name"
                            required
                            placeholder={errors.breweryName && touched.breweryName ? errors.breweryName : 'Enter Name'}
                            className={errors.breweryName && touched.breweryName ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Input}
                            name="addressLine1"
                            label="Address Line 1"
                            required
                            placeholder={
                              errors.addressLine1 && touched.addressLine1 ? errors.addressLine1 : '123 street'
                            }
                            className={errors.addressLine1 && touched.addressLine1 ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Input}
                            name="addressLine2"
                            label="Address Line 2"
                            required
                            placeholder={
                              errors.addressLine2 && touched.addressLine2 ? errors.addressLine2 : 'Suite 700'
                            }
                            className={errors.addressLine2 && touched.addressLine2 ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Input}
                            name="city"
                            label="City"
                            required
                            placeholder={errors.city && touched.city ? errors.city : 'Brew Town'}
                            className={errors.city && touched.city ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Select}
                            name="stateProvinceRegion"
                            label="State / Province / Region*"
                            options={USStates.map(state => ({ label: state, value: state }))}
                            className={
                              errors.stateProvinceRegion && touched.stateProvinceRegion ? 'input-error-field' : ''
                            }
                            value={USStates.find(e => e.value === values.stateProvinceRegion)}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Input}
                            name="postalcode"
                            label="Zip"
                            required
                            placeholder={errors.postalcode && touched.postalcode ? errors.postalcode : 'Enter Zip Code'}
                            className={errors.postalcode && touched.postalcode ? 'input-error-field' : ''}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Field
                            component={Select}
                            name="country"
                            label="Country"
                            options={countriesList.map(count => ({
                              label: count.name,
                              value: count.alpha2Code,
                              region: count.region,
                            }))}
                            value={countriesList.find(e => e.value === values.country)}
                            className={errors.country && touched.country ? 'input-error-field' : ''}
                          />
                        </Grid>
                      </Grid>
                      <span className="section-title">Champion</span>
                      <Grid
                        style={{
                          margin: '0 auto',
                        }}
                        container
                        spacing={2}>
                        <Grid item xs={4}>
                          <Field
                            component={Select}
                            name="role"
                            label="Select a Role"
                            handleChange
                            options={championRoles}
                            value={championRoles.find(e => e.value === values.role)}
                            className={errors.role && touched.role ? 'input-error-field' : ''}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div className="footer">
                      <Button seafoamBlue size="small" onClick={() => toggleAddMemberForm(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" logixBlue size="small">
                        Submit
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Modal>
      <Modal
        open={isRemoveUserModalOpen}
      >
        <div className="modal-container remove-user-modal">
          <div onClick={e => e.stopPropagation()} className="modal">
            <div className="heading">Are you sure you want to remove user?</div>
            <div className="footer">
              <Button seafoamBlue size="small" onClick={closeRemoveUserModal}>
                No
              </Button>
              <Button type="submit" logixBlue size="small" onClick={removeUser}>
                Yes
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      {teamMembers.memberDeletionSuccess && (
        <div>
          <Alert onClose={props.resetMemberDeletionData}>
            {teamMembers.memberDeletionSuccess}
          </Alert>
        </div>
      )}
      {teamMembers.errorInMemberDeletion && (
        <>
          <Space size={10} />
          <Alert onClose={props.resetMemberDeletionData} severity="error">
            Failed to remove user
          </Alert>
        </>
      )}
      {teamMembers.memberDeletionInProgress && (
        <>
          <Space size={10} />
          <CircularProgress />
        </>
      )}
    </Widget>
  );
};

const mapStateToProps = (state) => {
  return {
    teamMembers: state.teamMembers
  };
};

export default connect(mapStateToProps, {
  resetMemberDeletionData
})(TeamMembers);
