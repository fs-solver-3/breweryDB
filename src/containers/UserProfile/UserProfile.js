import React, { useEffect, useState } from 'react';
import ContentTemplate from 'components/molecules/ContentTemplate';
import Widget from 'components/atoms/Widget';
import Select from 'components/atoms/Select';
import Input from 'components/atoms/Input';
import { Grid } from '@material-ui/core';
import { roles, newRoles } from 'helper/constants';
import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import Checkbox from 'components/atoms/Checkbox';
import Button from 'components/atoms/Button';
import UploadImage from 'components/molecules/UploadImages';
import AppModal from 'components/atoms/Modal';
import { Field, Form, Formik } from 'formik';
import { initialValues, validationSchema } from './helper';
import { callAPI } from '../../helper/apiUtils';
import './style.css';
import { ImageUploadModal } from '../../components/molecules/ImageUploadModal/ImageUploadModal';

const UserProfile = ({ userDetails, authReucer }) => {
  const [defaultValues, updateDefaultValues] = useState(initialValues);
  const [selectedFlavors, updateSelectedFlavors] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageModal, toggleImageModal] = useState(false);
  const [files, saveUploads] = useState([]);
  const [assignedLocations, setAssignedLocations] = useState([]);

  const handleUpload = filesData => {
    saveUploads(filesData);
  };

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(initialValues));
    data.first_name = userDetails.firstName || '';
    data.last_name = userDetails.lastName || '';
    data.beerlove = newRoles.filter(option => option.value === userDetails.beerlove) || '';
    data.name = roles.filter(option => option.value === userDetails.role) || '';
    data.email = userDetails.email || '';
    callAPI('/digi-bdbuserprofile?email=' + data.email, {}, 'GET').then(res => {
      data.assignedLocations = res && res.data && res.data[0] && res.data[0].breweryLocationName;
      setAssignedLocations(data.assignedLocations);
    });
    data.Phone_number = userDetails.workPhone || '';
    data.cell_phone = userDetails.cellPhone || '';
    updateDefaultValues(data);
  }, [userDetails.firstName]);

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const flavorData = [
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
  ];

  const flavorProps = id => ({
    className: `${selectedFlavors.includes(id) ? 'highlight-flavor' : 'flavor-item'}`,
    onClick: () => {
      const flavors = [...selectedFlavors];
      if (selectedFlavors.includes(id)) {
        flavors.splice(flavors.indexOf(id), 1);
      } else {
        flavors.push(id);
      }
      updateSelectedFlavors(flavors);
    },
  });

  return (
    <ContentTemplate title="User Profile">
      <Widget cneter width={1200}>
        <Grid container spacing={4} justify="space-between">
          <Grid item xs={7}>
            <Formik
              onSubmit={values => {
                callAPI('/digi-user', {}, 'PUT', values, {}, { Authorization: authReucer.loggedInUser.AccessToken });
              }}
              initialValues={defaultValues}
              validationSchema={validationSchema[0]}
              enableReinitialize>
              {() => (
                <Form>
                  <Grid container spacing={3} item xs={12}>
                    <Grid item xs={6}>
                      <Field component={Input} name="first_name" label="First Name" required />
                    </Grid>
                    <Grid item xs={6}>
                      <Field component={Input} name="last_name" label="Last Name" required />
                    </Grid>
                    <Grid item xs={6}>
                      <Field component={Select} name="beerlove" label="Brewery Role" options={newRoles} />
                    </Grid>
                    <Grid item xs={6}>
                      <Field component={Select} name="name" label="Site Role" options={roles} />
                    </Grid>
                    <Grid item xs={12}>
                      <Field component={Input} name="email" label="Work Email" required />
                    </Grid>
                    <Grid item xs={6}>
                      <Field component={Input} name="Phone_number" label="Work Phone" required />
                    </Grid>
                    <Grid item xs={6}>
                      <Field component={Input} name="cell_phone" label="Mobile Phone" />
                    </Grid>
                    <Grid item xs={12}>
                      <Headding bold as="h5" title="Communication Preference" />
                      <div
                        className="card--preference"
                        style={{
                          justifyContent: 'start',
                        }}>
                        <div>
                          <Checkbox />
                          <Headding as="p" bold title="Email" />
                        </div>
                        <div>
                          <Checkbox />
                          <Headding as="p" bold title="Phone" />
                        </div>
                        <div>
                          <Checkbox />
                          <Headding as="p" bold title="Both" />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item xs={6}>
                        <Field component={Input} name="previousPassword" label="Current Password" type="password" />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item xs={6}>
                        <Field component={Input} name="proposedPassword" label="Change Password" type="password" />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item xs={6}>
                        <Field
                          component={Input}
                          name="confirmProposedPassword"
                          label="Confirm New Password"
                          type="password"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" logixBlue bold size="small">
                        SUBMIT
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={5}>
            <Headding as="h5" bold title="Change Profile Picture" />
            <Grid item xs={12}>
              <UploadImage handleUploadImage={() => toggleImageModal(true)} />
            </Grid>
            <Grid item xs={12}>
              {files.map((file, i) => (
                <div className="files-uploaded" key={i}>
                  <img src="./images/tick.png" alt="tick" className="tick-icon" />
                  <p>{file.name}</p>
                </div>
              ))}
            </Grid>
            <Space size={60} />
            <Headding as="h5" bold title="Location(s)" />
            <Space size={10} />
            {assignedLocations && (
              <Grid container spacing={2}>
                <div className="locations-list-container">
                  {assignedLocations.map((loc, i) => {
                    return <div>{loc}</div>;
                  })}
                </div>
              </Grid>
            )}
            <Space size={60} />
            <Headding as="h5" bold title="Favorite Flavor Notes" />
            <Space size={15} />
            <div className="flex card--favorite-brew flavors-list-menu">
              {selectedFlavors.map(i => (
                <div>
                  <img alt="" src={flavorData[i - 1].icon} />
                  <p>{flavorData[i - 1].label}</p>
                </div>
              ))}
              <div className="pointer" onClick={openModal}>
                <img style={{ width: 46 }} alt="" src="/images/add-an-event.png" />
                <p>Add More</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Widget>
      <AppModal
        additionalClass="flavors-modal"
        isOpen={isModalOpen}
        onClose={openModal}
        callback={openModal}
        title="Primary Flavor Notes">
        <div className="flavours-container">
          <div className="flavor-items-container">
            <div className="flavour-items">
              <div {...flavorProps(1)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(2)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(3)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(4)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(5)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(6)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(7)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(8)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(9)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(10)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div className="pointer flavor-item">
                <div className="add-icon">+</div>
                <p>See More</p>
              </div>
            </div>
            <div className="flavour-items">
              <div {...flavorProps(11)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(12)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
            </div>
          </div>
          <div className="search-flavour">
            <h4>Don't see your Flavor? Search Here</h4>
            {/* <Input placeholder="Search Flavor Notes" /> */}
            <div className="suggestor-flavor">
              <Select
                placeholder="Search Flavor Notes"
                allowCustomInput
                options={[
                  { label: 'appricot', value: 'appricot' },
                  { label: 'apple', value: 'apple' },
                  { label: 'lichi', value: 'lichi' },
                  { label: 'banana', value: 'banana' },
                  { label: 'almong', value: 'almong' },
                  { label: 'strawberry', value: 'strawberry' },
                ]}
              />
            </div>
          </div>
        </div>
      </AppModal>
      <ImageUploadModal
        isOpen={imageModal}
        onClose={() => toggleImageModal(false)}
        onUpload={handleUpload}
        title="Upload Profile Picture"
      />
    </ContentTemplate>
  );
};

export default UserProfile;
