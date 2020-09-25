import { callAPI } from 'helper/apiUtils';

export function postRequestAccount(values) {
  return {
    type: 'REQUEST_ACCOUNT',
    payload: callAPI('/digi-update-user-registration', {}, 'POST', values),
  };
}
