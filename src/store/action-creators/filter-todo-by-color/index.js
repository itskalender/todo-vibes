import { COLOR_FILTERS_CHANGED } from '../../action-types';

export function changeColorFilters(color) {
  return {
    type: COLOR_FILTERS_CHANGED,
    payload: {
      color,
    },
  };
}
