import {
  ON_DELETE_PLACE,
  ON_START_LOAD_PLACES,
  ON_SELECTED_PLACE,
  ON_SUCCESS_LOAD_PLACES,
  ON_SAVE_PLACE,
} from '../actions/PlacesListActions';

const INITIAL_STATE = {
  onStartLoadPlaces: false,
  selectedPlace: null,
  selectedPlaces: [],
};

const onStateChange = ({ state, payload, error }) => ({
  [ON_START_LOAD_PLACES]: () => ({ ...state, onStartLoadPlaces: true }),
  [ON_SUCCESS_LOAD_PLACES]: () => ({
    ...state,
    onSuccessLoadPlaces: false,
    selectedPlaces: payload,
  }),
  [ON_SELECTED_PLACE]: () => {
    if (payload === null) {
      return { ...state, selectedPlace: null };
    }

    const selectedPlace = [...state.selectedPlaces].find(
      (place) => place.place_id === payload[0]?.place_id
    );

    if (selectedPlace) {
      return { ...state, selectedPlace };
    }

    return { ...state, selectedPlace: payload[0] };
  },
  [ON_SAVE_PLACE]: () => {
    const index = [...state.selectedPlaces].findIndex(
      (place) => place.place_id === payload.place_id
    );

    if (index === -1) {
      return {
        ...state,
        selectedPlace: null,
        selectedPlaces: [...state.selectedPlaces, payload],
      };
    }

    const selectedPlaces = ([...state.selectedPlaces][index] = payload);

    return {
      ...state,
      selectedPlace: null,
      selectedPlaces,
    };
  },
});

const reducer = (state = INITIAL_STATE, { type, payload, error }) => {
  const reducer = onStateChange({ state, payload, error });

  if (Object.prototype.hasOwnProperty.call(reducer, type)) {
    return reducer[type]();
  }

  return state;
};

export default reducer;
