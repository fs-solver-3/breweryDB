import React from 'react';
import PropTypes from 'prop-types';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Switch from 'components/atoms/Switch';
import Grid from '@material-ui/core/Grid';

import Flex from 'components/atoms/Flex';
import { Field, FieldArray } from 'formik';
import { RadioButton } from 'components/atoms/Radio/Radio';
import { weeks } from 'helper/constants';
import Select from '../../components/atoms/Select';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DaysAndHours = (props) => {
  const {
    formikValues
  } = props;

  return (
    <div>
      <Headding as="h3" bold title="Tour Frequency / Days & Times" />
      <Space size={20} />
      <div className="frequency-content-container section-padding-left">
        <>
          <div>
            <Headding as="h5" bold title="Frequency" />

            <Field
              component={RadioButton}
              type="radio"
              name="attributes.tourFrequency"
              label="Daily"
              id="daily"
              value="daily"
            />
            <Field
              component={RadioButton}
              type="radio"
              name="attributes.tourFrequency"
              label="Weekly"
              id="weekly"
              value="weekly"
            />
            <Field
              component={RadioButton}
              type="radio"
              name="attributes.tourFrequency"
              label="Monthly"
              id="monthly"
              value="monthly"
            />
            <Field
              component={RadioButton}
              type="radio"
              name="attributes.tourFrequency"
              label="Bi-monthly"
              id="bi_monthly"
              value="bi_monthly"
            />
            <Field
              component={RadioButton}
              type="radio"
              name="attributes.tourFrequency"
              label="Upon Request"
              id="upon_request"
              value="upon_request"
            />
          </div>
          <div className="frequency-container">
            <Field
              component={Select}
              label="Week?"
              name="attributes.tourWeek"
              options={weeks}
              value={formikValues.attributes.tourWeek}
            />
          </div>

          <div>
            <FieldArray
              name="attributes.tourWeekDays"
              render={(arrayHelpers) => (
                <>
                  {days.map((day) => (
                    <Grid key={`attributes.tour${day}`} container alignItems="center" justify="space-between">
                      <Grid item xs={2}>
                        <Headding as="h5" bold title={day} />
                      </Grid>
                      <Grid item xs={2}>
                        <Flex>
                          <Switch
                            name={`attributes.tour${day}`}
                            onClick={() => {
                              const itemIndex = formikValues.attributes.tourWeekDays.indexOf(day);

                              if (itemIndex !== -1) {
                                arrayHelpers.remove(itemIndex);
                              } else {
                                arrayHelpers.push(day);
                              }
                            }}
                            checked={formikValues.attributes.tourWeekDays.includes(day)}
                          />
                          <Headding as="p" title="Yes" />
                        </Flex>
                      </Grid>
                    </Grid>
                  ))}
                </>
              )}
            />
          </div>
        </>
      </div>
    </div>
  );
};

DaysAndHours.propTypes = {
  formikValues: PropTypes.oneOf(PropTypes.object)
};

export default DaysAndHours;
