import { callAPI } from 'helper/apiUtils';
import * as actions from './actions';

export function productsList(params = {}) {
  return {
    type: actions.PRODUCTS_LIST,
    payload: callAPI('/digi-bpl', {}, 'POST', params),
  };
}
