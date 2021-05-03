export const types = {
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

// initialState example:
// {
//   name: 'pikachu',
//   favorite: true,
// },

const initialState = {
  pokemons: [],
};

const pokedex = (state = initialState, action) => {
  const { type, payload } = action;
  const { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } = types;

  switch (type) {
    case ADD_TO_FAVORITES:
      const addFavoritePokemon = {
        name: payload,
        favorite: true,
      };
      return {
        ...state,
        pokemons: [...state.pokemons, addFavoritePokemon],
      };
    case REMOVE_FROM_FAVORITES:
      const newState = state.pokemons.filter((item, index) => {
        return item.name !== payload;
      });

      return {
        ...state,
        pokemons: newState,
      };

    default:
      return state;
  }
};

const addTofavorites = (payload) => {
  return {
    type: types.ADD_TO_FAVORITES,
    payload,
  };
};

const removeFromFavorites = (payload) => {
  return {
    type: types.REMOVE_FROM_FAVORITES,
    payload,
  };
};

export default pokedex;
export { addTofavorites, removeFromFavorites }; // dispatch
export const PokedexTypes = types;
