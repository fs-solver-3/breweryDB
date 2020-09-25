import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  workPhone: '',
  email: '',
  cellPhone: '',
  breweryID: '',
  breweryName: '',
  role: '',
  addressLine1: '',
  addressLine2: '',
  stateProvinceRegion: '',
  city: '',
  postalcode: '',
  country: '',
  serviceSubscription: 'brewerydb',
  requestTimeStamp: '12-08-2020 12:00 12:12 12:12',
};

export const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    workPhone: Yup.number().required(),
    breweryName: Yup.string().required(),
    addressLine1: Yup.string().required(),
    addressLine2: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
    stateProvinceRegion: Yup.string().required(),
    postalcode: Yup.number().required(),
    role: Yup.string().required('Please select one option.'),
    location: Yup.string().required(),
  }),
];
