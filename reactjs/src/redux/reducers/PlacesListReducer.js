import {
  ON_DELETE_PLACE,
  ON_START_LOAD_PLACES,
  ON_SELECTED_PLACE,
  ON_SUCCESS_LOAD_PLACES,
  ON_SAVE_PLACE,
  ON_ERROR_SHOW_PLACE,
} from '../actions/PlacesListActions';

const INITIAL_STATE = {
  onStartLoadPlaces: false,
  selectedPlace: null,
  selectedPlaces: [],
  errorMessage: null,
};

const onStateChange = ({ state, payload, error }) => ({
  [ON_START_LOAD_PLACES]: () => ({ ...state, onStartLoadPlaces: true }),
  [ON_SUCCESS_LOAD_PLACES]: () => ({
    ...state,
    onStartLoadPlaces: false,
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
      return { ...state, selectedPlace, errorMessage: null };
    }

    return { ...state, selectedPlace: payload[0], errorMessage: null };
  },
  [ON_SAVE_PLACE]: () => {
    const isPlaceSaved = [...state.selectedPlaces].find(
      (place) => place.place_id === payload.place_id
    );

    if (isPlaceSaved) {
      const selectedPlaces = [...state.selectedPlaces].map((place) => {
        if (place.place_id === payload.place_id) {
          return { ...place, ...payload };
        }

        return place;
      });

      return {
        ...state,
        selectedPlace: null,
        selectedPlaces,
        errorMessage: null,
      };
    }

    return {
      ...state,
      selectedPlace: null,
      selectedPlaces: [...state.selectedPlaces, payload],
    };
  },
  [ON_ERROR_SHOW_PLACE]: () => ({ ...state, errorMessage: error }),
  [ON_DELETE_PLACE]: () => {
    const selectedPlaces = [...state.selectedPlaces].filter(
      (place) => place.place_id !== payload.place_id
    );

    return { ...state, selectedPlaces };
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
