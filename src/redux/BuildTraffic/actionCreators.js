import { callAPI } from 'helper/apiUtils';
import * as actions from './actions';

export const addBuildTraffic = payload => {
  return { type: actions.ADD_TRAFFIC_REQ, payload: callAPI('/digi-bpl/location', null, 'POST', payload) };
};
