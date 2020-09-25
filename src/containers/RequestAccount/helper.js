import * as Yup from 'yup';
import moment from 'moment';

export const initialValues = {
  firstName: '',
  lastName: '',
  workPhone: '',
  email: '',
  cellPhone: '',
  breweryID: '',
  breweryName: '',
  addressLine1: '',
  addressLine2: '',
  stateProvinceRegion: '',
  city: '',
  postalcode: '',
  country: 'US',
  serviceSubscription: 'brewerydb',
  beerlove: '',
  requestTimeStamp: moment().format('DD-MM-YYYY hh:mm:ss'),
  confirm_email: '',
  role: ''
};

export const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    confirm_email: Yup.string()
      .oneOf([Yup.ref('email'), null])
      .required('Email confirm is required'),
    workPhone: Yup.string()
      .required('Work phone is required!')
      .matches(/^\d{7,17}$/, 'ex: +193645xxxxx'),

    breweryName: Yup.string().required('Brewery name is required!'),
    beerlove: Yup.string().required('Your role is required!'),
    addressLine1: Yup.string().required('This field is required!'),
    city: Yup.string().required('City is required!'),
    country: Yup.string().required('Country is required!'),
    stateProvinceRegion: Yup.string().required('This field is required!'),
    postalcode: Yup.number().required('Postal code is required!'),
    role: Yup.string().required('Please select one option.'),
  }),
];
