import { callAPI } from 'helper/apiUtils';
import * as actions from './actions';

export function locationsList(params) {
  return {
    type: actions.LOCATIONS_LIST,
    payload: callAPI('/digi-bpl', {}, 'POST', params),
  };
}
