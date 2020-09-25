import axios from 'axios';
import Qs from 'qs';

const serializerConfig = {
  arrayFormat: 'brackets',
  encode: false,
};

function callAPI(path, params, method, data = null, options = {}, headersObj = {}) {
  const API_ROOT = 'https://be5v9uz8x9.execute-api.us-east-2.amazonaws.com/Dev';
  const url = API_ROOT + path;
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc',
    ...headersObj
  };

  return axios({
    method,
    url,
    params,
    paramsSerializer: (paramObject) => Qs.stringify(paramObject, serializerConfig),
    data,
    headers,
    ...options
  });
}

export { callAPI };
