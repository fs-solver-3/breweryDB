import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  workPhone: '',
  email: '',
  breweryID: '',
  breweryName: '',
  role: 'adminChampion',
};

export const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    confirm_email: Yup.string()
      .oneOf([Yup.ref('email'), null])
      .required('Email confirm is required'),
    workPhone: Yup.number().required(),
    breweryName: Yup.string().required(),
    //role: Yup.string().required('Please select one option.'),
  }),
];
