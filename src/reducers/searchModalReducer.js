import {UPDATED_FILTERED_ITEMS} from '../actions/searchModal/searchActions';
const initial = {
  filteredItems: [],
};
export default function (state = initial, action) {
  switch (action.type) {
    case UPDATED_FILTERED_ITEMS:
      return {
        ...state,
        filteredItems: action.payload,
      };

    default:
      return state;
  }
}
