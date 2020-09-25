import React from 'react';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Input from 'components/atoms/Input';
import Headding from 'components/atoms/Headding';
import Button from 'components/atoms/Button';
import Grid from '@material-ui/core/Grid';
import Textarea from 'components/atoms/Textarea';

const GuildMemberships = () => (
  <Widget cneter width={1080}>
    <Grid container>
      <Grid item xs={10}>
        <Headding as="h3" bold title="Guild Memberships" />
        <Space size={20} />
        <Input placeholder="Enter Guild Name" />
        <Space size={10} />
        <Button seafoamBlue size="small">
          Add Guild
        </Button>

        <Space size={30} />
        <Headding as="h3" bold title="Festivals / Awards" />
        <Space size={20} />
        <Grid container justify="space-between">
          <Grid item xs={5}>
            <Input label="Festivals" placeholder="Enter Fesitivals" />
          </Grid>
          <Grid item xs={5}>
            <Input label="Year" placeholder="YYYY" />
          </Grid>
        </Grid>
        <Space size={10} />
        <Button seafoamBlue size="small">
          Add Festival
        </Button>

        <Space size={30} />
        <Grid container justify="space-between">
          <Grid item xs={5}>
            <Input label="Award" placeholder="Enter Award" />
          </Grid>
          <Grid item xs={5}>
            <Input label="Year" placeholder="YYYY" />
          </Grid>
        </Grid>
        <Space size={10} />
        <Button seafoamBlue size="small">
          Add Award
        </Button>

        <Space size={30} />
        <Headding as="h3" bold title="Mailing List" />
        <Space size={20} />
        <Grid container justify="space-between">
          <Grid item xs={4}>
            <Input label="Email" placeholder="Mailinglist@gmail.com" />
          </Grid>
        </Grid>
        <Space size={10} />

        <Space size={30} />
        <Headding as="h3" bold title="History of the Brewery " />
        <Space size={20} />
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <Textarea label="Describe your Brewery " rows={10} />
          </Grid>
        </Grid>
        <Space size={10} />
      </Grid>
    </Grid>
  </Widget>
);

export default GuildMemberships;
