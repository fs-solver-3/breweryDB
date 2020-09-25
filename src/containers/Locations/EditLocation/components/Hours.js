import React from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Switch from 'components/atoms/Switch';
import Flex from 'components/atoms/Flex';

const Hours = ({
  day, val1, val2, val3, val4, selected,
}) => (
  <Grid container justify="center">
    <Grid item xs={2}>
      <Headding as="h5" bold title={day} />
    </Grid>
    <Grid item xs={2}>
      <Flex>
        <Switch checked={selected} />
        <Headding as="p" title={selected ? 'Open' : 'Closed'} />
      </Flex>
    </Grid>
    <Grid item xs={6}>
      <Flex>
        <Input width={110} size="small" rounded value={val1} />
        <Headding
          bold
          as="h5"
          title="-"
          style={{
            margin: '0 15px',
          }}
        />
        <Input width={110} size="small" rounded value={val2} />
        <Headding
          as="h5"
          bold
          title="Add Hours"
          style={{
            marginLeft: 20,
          }}
        />
      </Flex>
      {val3 && val4 && (
        <Flex style={{ marginTop: 5, marginBottom: 10 }}>
          <Input width={110} size="small" rounded value={val3} />
          <Headding
            bold
            as="h5"
            title="-"
            style={{
              margin: '0 15px',
            }}
          />
          <Input width={110} size="small" rounded value={val4} />
        </Flex>
      )}
    </Grid>
  </Grid>
);

export default Hours;
