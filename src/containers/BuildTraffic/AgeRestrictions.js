import React from 'react';
import PropTypes from 'prop-types';

import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
// import Checkbox from 'components/atoms/Checkbox';
import { Field } from 'formik';
import { RadioButton } from 'components/atoms/Radio/Radio';

const AgeRestrictions = (props) => {
  const {
    formikValues
  } = props;

  return (
    <div>
      <Headding as="h3" bold title="Age Restrictions" />
      <Space size={19} />
      <div className="section-padding-left">
        <>
          <Field
            component={RadioButton}
            type="radio"
            name="attributes.ageRestriction"
            value={formikValues.attributes.ageRestriction}
            label="All ages welcome"
            // value="all_ages_welcome"
            id="all_ages_welcome"
          />
          <Field
            component={RadioButton}
            type="radio"
            name="attributes.ageRestriction"
            value={formikValues.attributes.ageRestriction}
            label="Underage parties must be accompanied by an adult"
            // value="underage_parties_must_be_accompanied_by_an_adult"
            id="underage_parties_must_be_accompanied_by_an_adult"
          />
          <Field
            component={RadioButton}
            type="radio"
            name="attributes.ageRestriction"
            value={formikValues.attributes.ageRestriction}
            label="Must be of legal drinking age"
            // value="must_be_of_legal_drinking_age"
            id="must_be_of_legal_drinking_age"
          />
        </>
      </div>
    </div>
  );
};

AgeRestrictions.propTypes = {
  formikValues: PropTypes.objectOf(PropTypes.object)
};

export default AgeRestrictions;
