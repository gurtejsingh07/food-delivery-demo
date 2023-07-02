import { UPDATE_SYSTEM_LANG } from './appActions';
export const setLang = lang => dispatch => {
  dispatch({ type: UPDATE_SYSTEM_LANG, payload: lang });
};
