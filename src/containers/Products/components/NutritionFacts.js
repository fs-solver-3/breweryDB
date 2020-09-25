import React from 'react';
import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';
import Input from 'components/atoms/Input';
import Grid from '@material-ui/core/Grid';

const NutritionFacts = ({ onChange }) => {
  const handleChange = name => value => {
    const event = {
      target: {
        name,
        value: value.toLowerCase(),
      },
    };
    onChange(event);
  };

  return (
    <Widget>
      <div className="item-container">
        <Headding as="h3" bold title="Nutrition Facts" />
        <Space size={20} />
        <Grid style={{ marginLeft: '12px' }} container spacing={4}>
          <Grid item xs={6}>
            <Select
               options={[
                { label: '4 OZ', value: '4 OZ' },
                { label: '6 OZ', value: '6 OZ' },
                { label: '8 OZ', value: '8 OZ' },
                { label: '10 OZ', value: '10 OZ' },
                { label: '12 OZ', value: '12 OZ' },
                { label: '16 OZ', value: '16 OZ' },
              ]}
              label="Serving Size"
              onChange={handleChange('nutritionalServingSize')}
              placeholder="Select Serving Size"
            />
          </Grid>
          <Grid item xs={6}>
            <Input label="Calories" placeholder="0" name="calories" onChange={onChange} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Sodium" placeholder="0" rightLabel="Milligrams" name="Sodium" onChange={onChange} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Carbohydrates" placeholder="0" rightLabel="Grams" name="Carbohydrates" onChange={onChange} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Sugars" placeholder="0" rightLabel="Grams" name="Sugars" onChange={onChange} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Protein" placeholder="0" rightLabel="Grams" name="Protein" onChange={onChange} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Probiotics" placeholder="0" rightLabel="Billion" name="probiotics" onChange={onChange} />
          </Grid>
        </Grid>
      </div>
    </Widget>
  );
};

export default NutritionFacts;
