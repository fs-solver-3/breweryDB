import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonUI from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import Fab from '@material-ui/core/Fab';
import Breadcumb from 'components/atoms/Breadcumb';
import FilterAndSort from 'components/molecules/FilterAndSort';
import Headding from 'components/atoms/Headding';
import SearchBar from 'components/atoms/SearchBar';
import Space from 'components/atoms/Space';
import ViewFilter from 'components/molecules/ViewFilter';
import Widget from 'components/atoms/Widget';
import Table from 'components/atoms/Table';
import Checkbox from 'components/atoms/Checkbox';
import ContentTemplate from 'components/molecules/ContentTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import AssignLocationDrawer from './AssignLocationDrawer';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { teamMembersFilterOptions, teamMembersSortOptions, onCheck } from 'helper/constants';
import { championRoles, USStates } from '../../helper/constants';
import { initialValues, validationSchema } from './helper';
import Card from './Card';
import { callAPI } from '../../helper/apiUtils';

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#003a70',
    color: '#ffffff',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const links = [
  {
    label: 'Dashboard',
    link: '/',
  },
  {
    label: 'Team Members',
    link: '/team_members',
  },
  {
    label: 'Upland Fountain Square',
    link: '#',
  },
];

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '3px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TableView = ({ userList, checked, onCheck, handleOpen }) => {
  const classes = useStyles();
  const resendInvite = email => {
    callAPI('/digi-resend-invite-link', {}, 'POST', { username: email });
  };

  const deleteInvite = email => {
    callAPI('/digi-admin-delete-user', {}, 'POST', { username: email });
  };
  const getLocations = locationArray => {
    var locationString = locationArray.toString();
    return locationString;
  };

  const locationPopover = locationArr => {
    return (
      <div>
        <p className="Champion-for">Locations</p>
        <Divider style={{ background: '#ffffff' }} />
        <div className="Brewery-Location">
          {locationArr.map((assignedLocationsItem, i) => {
            return <p key={i}>{assignedLocationsItem}</p>;
          })}
        </div>
      </div>
    );
  };

  return (
    <Table headers={['', 'Name', 'Email Address', 'Champion', 'Location(s)', 'Manage Location Access', 'Action']}>
      {userList.map((row, i) => {
        return (
          <tr key={i}>
            <td>
              <Checkbox checked={row === checked} onClick={() => onCheck(row)} />
            </td>
            <td>
              {row['custom:first_name'] || ''} {','} {row['custom:last_name'] || ''}
            </td>
            <td>{row.email || ''}</td>
            <td>{row.name || ''}</td>
            <td>
              {row.assignedLocations && row.assignedLocations.length !== 0 ? (
                <div>
                  <HtmlTooltip arrow placement="right" title={locationPopover(row.assignedLocations)}>
                    <div id={`Popover_${i}`}>{getLocations(row.assignedLocations)}</div>
                  </HtmlTooltip>
                </div>
              ) : (
                  <Button bold>Pending</Button>
                )}
            </td>
            <td>
              <div className="table-action" onClick={() => handleOpen(row)}>
                <p>Location Access</p>
              </div>
            </td>
            <td style={{ width: 250 }}>
              <div className="table-action">
                {/* <p onClick={() => resendInvite(row.email || '')}>Resend Invite</p> */}
                <p onClick={() => deleteInvite(row.email || '')}>Remove User</p>
              </div>
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

const GridView = ({ userList, checked, onCheck }) => (
  <Grid container spacing={3}>
    {userList.map((row, num) => (
      <Grid key={num + 1} item lg={3}>
        <Card userDetails={row} isEven={(num + 1) % 2 === 0} checked={row === checked} onClick={() => onCheck(row)} />
      </Grid>
    ))}
  </Grid>
);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const TeamMembers = ({
  fetchUsersList,
  userList,
  userDetails,
  getCountries,
  fetchMembersList,
  memberList,
  locationsList,
  breweryLocations,
}) => {
  const [viewType, setViewType] = React.useState(0);
  const [state, setState] = React.useState({ right: false });
  const [LocationList, setLocationList] = React.useState(breweryLocations);
  const [addMemberFormVisible, toggleMemberForm] = React.useState(false);
  const [countriesList, updateCountriesList] = React.useState([]);
  const [checkedUser, setCheckedUser] = React.useState(null);
  const [locationModal, setLocationModal] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [addLocation, setAddLocation] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const classes = useStyles();

  useEffect(() => {
    getCountries().then(response => {
      updateCountriesList(response.value.data);
    });
    fetchMembersList({ orgId: userDetails.breweryId }).then(response => {
      let users = response.value.data.Users;
      users.forEach((user, index) => {
        const callUserProfileToUpdateUsersLocations = callAPI(
          '/digi-bdbuserprofile?email=' + user.email,
          {},
          'GET',
        ).then(res => {
          var list = [...users];
          list[index].assignedLocations = res && res.data && res.data[0] && res.data[0].breweryLocationName;
          setMembers(list);
        });
      });
    });
    let breweryLOcationDetail = {
      lastKnowKey: null,
      limit: null,
      entity: 'BREWERY',
      type: 'LOCATION',
      filter: 'breweryName = :v10 ',
      filterValue: {
        ':v10': userDetails.breweryName,
      },
    };
    locationsList(breweryLOcationDetail);
  }, []);

  const toggleAddMemberForm = flag => {
    toggleMemberForm(flag);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleAssignLocation = (selectedUser, index) => {
    const findAndReplace = keyvalue => {
      return LocationList.map(function (a, index) {
        if (index == keyvalue) {
          a.isAssign = true;
        }
        return a;
      });
    };
    setLocationList(findAndReplace(index));
  };

  const onCheck = (value) => {
    setCheckedUser(value === checkedUser ? null : value);
    setSelectedMember(value);
  };

  const handleOpen = (row) => {
    setSelectedMember(row);
    setLocationModal(true);
  };

  const handleClose = () => {
    setLocationModal(false);
    setSelectedMember([]);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className="text-center location-modal-header">
        Location Access
      </h2>
      <Divider style={{ background: '#0a406b' }} />
      <div style={{ padding: '0 24px' }}>
        <p id="simple-modal-description" className="location-modal-centent">
          {selectedMember['custom:first_name']} , {selectedMember['custom:last_name']} {selectedMember['email']} -
          Location Champion
        </p>
        <Table headers={['Location(s)', 'Access']}>
          <tr>
            <td>{'custom:first_name'}</td>
            <td>
              <div className="table-action" onClick={handleOpen}>
                <p>Access</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>{'custom:first_name'}</td>
            <td>
              <div className="table-action" onClick={handleOpen}>
                <p>Access</p>
              </div>
            </td>
          </tr>
        </Table>
        {!addLocation && (
          <div className="add-location" onClick={() => setAddLocation(true)}>
            <AddCircleOutlineIcon className="add-location-icon " />
            <p style={{ color: '#003b71' }}>Add a Location</p>
          </div>
        )}
        {addLocation && (
          <Autocomplete
            id="highlights-demo"
            style={{ width: 300 }}
            options={top100Films}
            getOptionLabel={option => option.title}
            renderInput={params => (
              <TextField
                {...params}
                label="Add Location"
                variant="outlined"
                margin="normal"
                style={{ background: '#e9f1f8' }}
              />
            )}
            renderOption={(option, { inputValue }) => {
              const matches = match(option.title, inputValue);
              const parts = parse(option.title, matches);

              return (
                <div>
                  {parts.map((part, index) => (
                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                      {part.text}
                    </span>
                  ))}
                </div>
              );
            }}
          />
        )}
      </div>
      <Divider style={{ background: '#0a406b' }} />
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <button className="location-cancle-button" onClick={handleClose}>
          Cancel
        </button>
        <button className="location-continue-button" onClick={handleClose}>
          Continue
        </button>
      </div>
    </div>
  );

  return (
    <ContentTemplate title="Team Members">
      <Breadcumb links={links} />
      <Widget>
        <div className="flex space-between">
          <div>
            <Headding as="h3" bold title="Team Members" />
            <Space size={15} />
            <FilterAndSort filters={teamMembersFilterOptions} sortOptions={teamMembersSortOptions} />
          </div>
          <div className="head-view-filters">
            <SearchBar />
            <Space size={22} />
            <ViewFilter onSetActive={num => setViewType(num)} />
          </div>
        </div>
        <Space size={30} />
        {viewType === 0 ? (
          <TableView userList={members} checked={checkedUser} onCheck={onCheck} handleOpen={handleOpen} />
        ) : (
            <GridView userList={members} checked={checkedUser} onCheck={onCheck} />
          )}
        <Space size={30} />
        <Grid container justify="space-around">
          <ButtonUI
            className="brewery-button"
            disabled={checkedUser != null ? false : true}
            onClick={toggleDrawer('right', true)}
            variant="contained"
          >
            Assign to a Location
          </ButtonUI>
          <AssignLocationDrawer
            selectedUser={selectedMember}
            userLocale={checkedUser && checkedUser.locale}
            LocationList={breweryLocations && breweryLocations.data && breweryLocations.data.Items}
            handleAssignLocation={handleAssignLocation}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          />
          <Button onClick={() => toggleAddMemberForm(true)} bold size="large">
            Invite a Team Member
          </Button>
        </Grid>
      </Widget>
      <Modal open={addMemberFormVisible}>
        <div onClick={() => toggleAddMemberForm(false)} className="modal-container">
          <div onClick={e => e.stopPropagation()} className="modal">
            <div className="heading">Invite a Team Member</div>
            <Formik
              onSubmit={values => {
                var loggedeInUser = JSON.parse(localStorage.user);
                var temporaryValues = {
                  cellPhone: '',
                  customerID: loggedeInUser.breweryId,
                  customerName: loggedeInUser.breweryName,
                  addressLine1: '',
                  addressLine2: '',
                  city: '',
                  country: '',
                  postalCode: '',
                  stateProvinceRegion: '',
                  primarySiteName: '',
                  imagePath: '',
                  siteID: '',
                  status: '',
                  otherLocation: '',
                  beerlove: '',
                  favbeerstyle: '',
                  comPreferences: '',
                  favoriteFlavorNote: '',
                  serviceSubscription: 'brewerydb',
                  role: 'adminChampion',
                };
                const finalRequiredBody = { ...values, ...temporaryValues };
                callAPI('/digi-admin-create-user', {}, 'POST', finalRequiredBody).then(() => {
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
                            name="confirm_email"
                            label="Confirm Email*"
                            required
                            placeholder={
                              errors.confirm_email && touched.confirm_email
                                ? errors.confirm_email
                                : 'eg: john.doe@gmail.com'
                            }
                            className={errors.confirm_email && touched.confirm_email ? 'input-error-field' : ''}
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
                      <span className="section-title">Brewery Permission</span>
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
        open={locationModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </ContentTemplate>
  );
};

const mapStateToProps = ({ locations }) => ({
  breweryLocations: locations.location,
});
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];
export default connect(mapStateToProps, {})(TeamMembers);
