import Axios from 'axios';

export function getCountries() {
  return {
    type: 'COUNTRIES',
    payload: Axios('https://restcountries.eu/rest/v2/all'),
  };
}

export function getRegion(region) {
  return {
    type: 'GET_COUNTRY_REGION',
    payload: Axios(`https://restcountries.eu/rest/v2/region/${region}`),
  };
}
