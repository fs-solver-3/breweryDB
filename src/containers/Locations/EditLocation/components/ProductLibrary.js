import React from 'react';
import Headding from 'components/atoms/Headding';
import SearchBar from 'components/atoms/SearchBar';
import Table from 'components/atoms/Table';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import Grid from '@material-ui/core/Grid';
import Flex from 'components/atoms/Flex';
import Switch from 'components/atoms/Switch';
import Checkbox from 'components/atoms/Checkbox';
import Widget from 'components/atoms/Widget';

const ProductLibrary = () => (
  <>
    <Widget isAccordion title="Product Library">
      <Grid container justify="space-between">
        <Headding as="h3" bold title="Our Products" />
        <SearchBar />
      </Grid>
      <Space size={20} />
      <Table
        size="small"
        headers={[
          'Product Name',
          'Availability',
          'Served in this location',
          'On Tap',
          'Style',
          'ABV%',
          'Completion %',
        ]}
      >
        {[1, 2, 3, 4].map((row, i) => (
          <tr key={i}>
            <td>A Long Beer Name</td>
            <td>Year Round</td>
            <td style={{ width: 200 }}>
              <Flex>
                <Checkbox size="small" label="Yes" field={{ checked: i !== 0 }} />
                <Checkbox size="small" label="No" />
              </Flex>
            </td>
            <td>
              <Flex style={{ width: 200 }}>
                <Headding as="p" title="Not on tap" />
                <Switch checked={i !== 0} />
                <Headding as="p" title="On tap now" />
              </Flex>
            </td>
            <td>Wheat</td>
            <td>10%</td>
            <td>
              <span style={{ margin: '0 15px' }}>75%</span>
              <Button size="xsmall" bold>
                Continue Editing
              </Button>
            </td>
          </tr>
        ))}
      </Table>
      <Space size={30} />
      <Grid container justify="space-around">
        <Button size="large" bold>
          Add a Product
        </Button>
      </Grid>
    </Widget>

    <Space size={25} />
    <Widget>
      <Grid container justify="space-between">
        <Headding as="h3" bold title="Guest Products" />
        <SearchBar />
      </Grid>
      <Space size={20} />
      <Table
        size="small"
        headers={['Product Name', 'Brewery', 'Served in this location', 'On Tap', 'Style', 'ABV%', 'Edit', 'Delete']}
      >
        {[1, 2, 3, 4].map((row, i) => (
          <tr key={i}>
            <td>A Long Beer Name</td>
            <td>Super Cool Brewery</td>
            <td style={{ width: 200 }}>
              <Flex>
                <Checkbox size="small" label="Yes" field={{ checked: i !== 0 }} />
                <Checkbox size="small" label="No" />
              </Flex>
            </td>
            <td>
              <Flex style={{ width: 200 }}>
                <Headding as="p" title="Not on tap" />
                <Switch checked={i !== 0} />
                <Headding as="p" title="On tap now" />
              </Flex>
            </td>
            <td>Wheat</td>
            <td>10%</td>
            <td>
              <Button seafoamBlue size="xsmall">
                <img src="/images/edit-icon.svg" alt="" />
                <span style={{ marginLeft: 10 }}>Edit</span>
              </Button>
            </td>
            <td>x</td>
          </tr>
        ))}
      </Table>
      <Space size={30} />
      <Grid container justify="space-around">
        <Button size="large" bold>
          Add a Product
        </Button>
      </Grid>
    </Widget>
  </>
);

export default ProductLibrary;
