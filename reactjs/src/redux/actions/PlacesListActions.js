export const ON_SELECTED_PLACE = 'ON_SELECTED_PLACE';
export const ON_START_LOAD_PLACES = 'ON_LOAD_PLACES';
export const ON_SUCCESS_LOAD_PLACES = 'ON_SUCCESS_LOAD_PLACES';
export const ON_DELETE_PLACE = 'ON_DELETE_PLACE';
export const ON_SAVE_PLACE = 'ON_SAVE_PLACE';
export const ON_ERROR_SHOW_PLACE = 'ON_ERROR_SHOW_PLACE';

export const onSelectedPlace = (payload) => ({
  type: ON_SELECTED_PLACE,
  payload,
});

export const onSavePlace = (payload) => ({ type: ON_SAVE_PLACE, payload });

export const onSuccessLoadPlaces = (payload) => ({
  type: ON_SUCCESS_LOAD_PLACES,
  payload,
});

export const onStartLoadPlaces = () => ({ type: ON_START_LOAD_PLACES });

export const onDeletePlaces = (payload) => ({ type: ON_DELETE_PLACE, payload });

export const onErrorShowPlace = (error) => ({
  type: ON_ERROR_SHOW_PLACE,
  error,
});
