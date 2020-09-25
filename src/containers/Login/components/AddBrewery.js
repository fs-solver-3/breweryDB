import React from 'react';
import { Grid } from '@material-ui/core';

import Button from 'components/atoms/Button';
import SearchBar from 'components/atoms/SearchBar';

const AddBrewery = () => (
  <Grid
    style={{
      margin: '0 auto',
    }}
    container
    spacing={2}
  >
    <Grid className="brewer-search" item xs={6}>
      <SearchBar />
    </Grid>
    <Grid item xs={6}>
      <Button seafoamBlue size="large">
        Add Brewery
      </Button>
    </Grid>

    <Grid item xs={12}>
      <ul>
        {[1, 2, 3, 4].map((item, index) => (
          <li className={`brewery-list-element ${index % 2 === 0 ? 'brewery-bg-grey' : ''}`}>
            Brewery #
            {item}
          </li>
        ))}
      </ul>
    </Grid>

    <Grid item xs={12}>
      <Button green size="large">
        Enter Brewery
      </Button>
    </Grid>
  </Grid>
);

export default AddBrewery;
