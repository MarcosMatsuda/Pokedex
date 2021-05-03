export const types = {
  LOAD_POKEMON: 'LOAD_POKEMON',
  SET_DETAILS: 'SET_DETAILS',
};

const initialState = {};

const details = (state = initialState, action) => {
  const { type, payload } = action;
  const { LOAD_POKEMON, SET_DETAILS } = types;

  switch (type) {
    case LOAD_POKEMON:
      return state;
    case SET_DETAILS:
      return {
        ...state,
        ...payload[0],
      };

    default:
      return state;
  }
};

const loadPokemon = (payload) => {
  return {
    type: types.LOAD_POKEMON,
    payload,
  };
};

const setDetails = (payload) => {
  return {
    type: types.SET_DETAILS,
    payload,
  };
};

export default details;
export { loadPokemon, setDetails }; // dispatch
export const DetailsTypes = types;
