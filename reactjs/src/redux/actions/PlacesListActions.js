export const ON_SELECTED_PLACE = 'ON_SELECTED_PLACE';
export const ON_START_LOAD_PLACES = 'ON_LOAD_PLACES';
export const ON_SUCCESS_LOAD_PLACES = 'ON_SUCCESS_LOAD_PLACES';
export const ON_DELETE_PLACE = 'ON_DELETE_PLACE';

export const onSelectedPlace = (payload) => ({
  type: ON_SELECTED_PLACE,
  payload,
});

export const onSuccessLoadPlaces = () => ({ type: ON_SUCCESS_LOAD_PLACES });

export const onStartLoadPlaces = () => ({ type: ON_START_LOAD_PLACES });

export const onDeletePlaces = (payload) => ({ type: ON_DELETE_PLACE, payload });
