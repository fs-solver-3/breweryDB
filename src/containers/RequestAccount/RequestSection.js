import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { Form, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Steps from 'components/atoms/Steps';
import Button from 'components/atoms/Button';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { initialValues, validationSchema } from './helper';
import { callAPI } from '../../helper/apiUtils';
import { apiUrls } from '../../helper/apiUrls';

const RequestSection = ({ onSubmit, successMsg, fetching, errorMessage }) => {
  const [step, setStep] = React.useState(1);
  const [breweryData, updateBreweryData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  // useEffect(() => {
  //   callAPI(apiUrls.updateBrewery, {}, 'GET').then(response => {
  //     updateBreweryData(response.data.Items);
  //   });
  // }, []);

  const loadOptions = inputValue => {
    if (inputValue !== '') {
      setLoading(true);

      const body = {
        lastKnowKey: null,
        filter: 'contains (breweryName, :v10) ',
        filterValue: {
          ':v10': inputValue,
        },
        limit: null,
        entity: 'BREWERY',
      };
      callAPI('/digi-bpl', {}, 'POST', body).then(res => {
        if (res.data && res.data.hasOwnProperty('Items')) {
          updateBreweryData(res.data.Items);
        }
        setLoading(false);
      });
    }
  };

  const onClickNext = payload => {
    const { validateForm, setErrors, setValues, values } = payload;
    const step1Fields = ['firstName', 'lastName', 'email', 'confirm_email', 'workPhone'];
    const step2Fields = [
      'breweryName',
      'beerlove',
      'addressLine1',
      'addressLine2',
      'city',
      'country',
      'stateProvinceRegion',
      'postalcode',
    ];
    validateForm().then(errors => {
      if (step === 1) {
        let isSectionValid = true;
        step1Fields.forEach(field => {
          isSectionValid = isSectionValid && !errors[field];
          if (errors[field]) {
            const data = JSON.parse(JSON.stringify(values));
            data[field] = '';
            setValues(data);
          }
        });
        if (isSectionValid) {
          setErrors({});
          setStep(2);
        }
      }
      if (step === 2) {
        let isSectionValid = true;
        step2Fields.forEach(field => {
          isSectionValid = isSectionValid && !errors[field];
          if (errors.field) {
            const data = JSON.parse(JSON.stringify(values));
            data[field] = '';
            setValues(data);
          }
        });
        if (isSectionValid) {
          setErrors({});
          setStep(3);
        }
      }
    });
  };

  const inputErrorProps = (fieldName, payload) => {
    const { handleChange, errors, setErrors, values } = payload;
    return {
      onChange: e => {
        handleChange(e);
        const data = JSON.parse(JSON.stringify(errors));
        data[fieldName] = '';
        setErrors(data);
      },
      placeholder: errors[fieldName]
        ? fieldName === 'confirm_email' &&
          errors.confirm_email === 'confirm_email must be one of the following values: , Ref(email)'
          ? 'Email Does Not Match'
          : errors[fieldName]
        : '',
      className: errors[fieldName] ? 'input-error-field' : 'no-error',
      value: values[fieldName],
    };
  };

  return (
    <div>
      <Space size={100} />
      <div style={{ textAlign: 'center' }}>
        <Headding fontSize={36} as="h1" title="Request An Account" />
      </div>
      <Space size={30} />
      <Steps
        onClickStep={stepNumber => {
          setStep(stepNumber);
        }}
        justify="center"
        active={step}
        steps={[1, 2, 3]}
      />
      {(successMsg || errorMessage) && (
        <div style={{ width: 400, margin: '0 auto' }}>
          <Space size={60} />
          <Alert severity={successMsg ? 'success' : 'error'}>{successMsg || errorMessage}</Alert>
        </div>
      )}
      <Space size={60} />
      <Formik
        onSubmit={(values, { resetForm }) =>
          onSubmit(values, breweryData, () => {
            console.log(values);
            setStep(1);
            resetForm(initialValues);
          })
        }
        initialValues={initialValues}
        validationSchema={validationSchema[0]}
        enableReinitialize
        validateOnChange={false}
        validateOnBlur={false}>
        {payload => (
          <Form>
            <div style={{ height: '415px' }}>
              <Grid
                style={{
                  width: 540,
                  margin: '0 auto',
                }}
                container
                spacing={2}
                justify="center">
                {step === 1 && <Step1 inputErrorProps={fieldName => inputErrorProps(fieldName, payload)} />}
                {step === 2 && (
                  <Step2
                    inputErrorProps={fieldName => inputErrorProps(fieldName, payload)}
                    breweryData={breweryData}
                    loadOptions={loadOptions}
                    isLoading={isLoading}
                    formik={payload}
                  />
                )}
                {step === 3 && <Step3 />}
              </Grid>
            </div>
            <Grid item container justify="center">
              {step < 3 && (
                <Button
                  additionalClassName="form-button"
                  logixBlue
                  bold
                  size="large"
                  type="button"
                  onClick={() => onClickNext(payload)}
                  // disabled={(
                  //     !dirty
                  //     || errors.confirm_email
                  //     || errors.email
                  //     || (step === 2 && Object.keys(errors).length !== 0)
                  // )}
                >
                  {step === 1 ? 'Get Started!' : 'Continue!'}
                </Button>
              )}
              {step === 3 && (
                <Button logixBlue size="large" type="submit" disabled={fetching}>
                  Submit Request
                </Button>
              )}
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

RequestSection.propTypes = {
  onSubmit: PropTypes.func,
  successMsg: PropTypes.string,
  fetching: PropTypes.bool,
};

export default RequestSection;
