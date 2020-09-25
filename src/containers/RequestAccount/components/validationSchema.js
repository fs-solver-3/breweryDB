import * as Yup from 'yup';

export default [
  Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    confirm_email: Yup.string()
      .oneOf([Yup.ref('email'), null])
      .required('Email confirm is required'),
    workPhone: Yup.number().required(),
  }),
  Yup.object().shape({
    breweryName: Yup.string().required(),
    role: Yup.string().required(),
    addressLine1: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
    state: Yup.string().required(),
    postalcode: Yup.number().required(),
  }),
];
