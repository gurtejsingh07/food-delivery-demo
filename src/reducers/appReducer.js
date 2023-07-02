import {UPDATE_SYSTEM_LANG} from '../actions/app/appActions';
const initial = {
  lang: 'en',
};
export default function (state = initial, action) {
  switch (action.type) {
    case UPDATE_SYSTEM_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
