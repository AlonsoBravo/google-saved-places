import {
  ON_DELETE_PLACE,
  ON_START_LOAD_PLACES,
  ON_SELECTED_PLACE,
  ON_SUCCESS_LOAD_PLACES,
} from '../actions/PlacesListActions';

const INITIAL_STATE = {
  onStartLoadPlaces: false,
  selectedPlace: [],
  selectedPlaces: [],
};

const onStateChange = ({ state, payload, error }) => ({
  [ON_START_LOAD_PLACES]: () => ({ ...state, onStartLoadPlaces: true }),
  [ON_SUCCESS_LOAD_PLACES]: () => ({
    ...state,
    onSuccessLoadPlaces: false,
    selectedPlaces: payload,
  }),
  [ON_SELECTED_PLACE]: () => ({ ...state, selectedPlace: payload }),
});

const reducer = (state = INITIAL_STATE, { type, payload, error }) => {
  const reducer = onStateChange({ state, payload, error });

  if (Object.prototype.hasOwnProperty.call(reducer, type)) {
    return reducer[type]();
  }

  return state;
};

export default reducer;
