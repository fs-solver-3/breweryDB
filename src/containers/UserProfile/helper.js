import * as Yup from 'yup';

export const initialValues = {
  first_name: '',
  last_name: '',
  beerlove: '',
  name: '',
  email: '',
  Phone_number: '',
  cell_phone: '',
};

export const validationSchema = [
  Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    beerlove: Yup.string().required(),
    name: Yup.string().required('Please select one option.'),
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    Phone_number: Yup.number().required(),
    cell_phone: Yup.number(),
    proposedPassword: Yup.string(),
    confirmProposedPassword: Yup.string().oneOf([Yup.ref('proposedPassword'), null]),
  }),
];
