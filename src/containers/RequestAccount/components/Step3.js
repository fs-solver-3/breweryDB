import React from 'react';
import { Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import { RadioButton } from 'components/atoms/Radio/Radio';
import FieldRadio from 'components/atoms/Radio/FieldRadio';

const Step3 = () => (
  <>
    <Headding bold title="Please select the role you are requesting." />
    <Space size={40} />

    <Grid item xs={6}>
      <div className="flex">
        <Field component={FieldRadio} name="role" value="adminChampion" id="adminChampion" label="" />
        <label htmlFor="adminChampion">
          <Space size={8} />
          <Headding bold title="Admin Champion" />
          <Headding as="small" title="Views & edits all content; manages user access." />
        </label>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className="flex">
        <Field component={FieldRadio} name="role" id="brandChampion" label="" />
        <label htmlFor="brandChampion">
          <Space size={8} />
          <Headding bold title="Brand Champion" />
          <Headding as="small" title="Views & edits all content." />
        </label>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className="flex">
        <Field component={FieldRadio} name="role" id="locationChampion" label="" />
        <label htmlFor="locationChampion">
          <Space size={8} />
          <Headding bold title="Location Champion" />
          <Headding as="small" title="Views all content & edits location content and brews." />
        </label>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className="flex">
        <Field component={FieldRadio} name="role" id="brewChampion" label="" />
        <label htmlFor="brewChampion">
          <Space size={8} />
          <Headding bold title="Brew Champion" />
          <Headding as="small" title="Views all content & edits brew content." />
        </label>
      </div>
    </Grid>
  </>
);

export default Step3;
