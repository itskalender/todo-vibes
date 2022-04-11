import { STATUS_FILTER_CHANGED } from '../../action-types';

export function changeStatusFilter(status) {
  return {
    type: STATUS_FILTER_CHANGED,
    payload: {
      status,
    },
  };
}
