import {
  GET_ITEMS,
  TOGGLE_VEG_FILTER,
  TOGGLE_NON_VEG_FILTER,
  FILTER_ITEMS,
} from '../actions/menu/menuActions';
const initial = {
  menuList: [],
  filteredMenuList: [],
  vegFilterSelected: true,
  nonVegFilterSelected: true,
};
export default function (state = initial, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        menuList: action.payload,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filteredMenuList: action.payload,
      };
    case TOGGLE_VEG_FILTER:
      return {
        ...state,
        vegFilterSelected: action.payload,
      };
    case TOGGLE_NON_VEG_FILTER:
      return {
        ...state,
        nonVegFilterSelected: action.payload,
      };
    default:
      return state;
  }
}
