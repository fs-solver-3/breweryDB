import * as actions from "./actions";

export const updateFormValues = (values) => (dispatch) => {
  dispatch({ type: actions.UPDATE_BRANDING_BASIC_FORM_VALUE, payload: values });
};

export const updateLogoAndImagery = (values) => (dispatch) => {
  dispatch({ type: actions.UPDATE_LOGO_AND_IMAGERY, payload: values });
};

export const updateSocialMedia = (values) => (dispatch) => {
  dispatch({ type: actions.UPDATE_SOCIAL_MEDIA, payload: values });
};

export const updateWebsite = (values) => (dispatch) => {
  dispatch({ type: actions.UPDATE_WEBSITE, payload: values });
};

export const updateLocation = (values) => (dispatch) => {
  dispatch({ type: actions.UPDATE_LOCATION, payload: values });
};
