import * as actions from "./actions";

export const initialState = {
  breweryBasics: {},
  logoAndImagery: {},
  socialMedia: {},
  website: {},
  location: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_BRANDING_BASIC_FORM_VALUE:
      return {
        ...state,
        breweryBasics: action.payload,
      };
    case actions.UPDATE_LOGO_AND_IMAGERY:
      return {
        ...state,
        logoAndImagery: action.payload,
      };
    case actions.UPDATE_SOCIAL_MEDIA:
      return {
        ...state,
        socialMedia: action.payload,
      };
    case actions.UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}
