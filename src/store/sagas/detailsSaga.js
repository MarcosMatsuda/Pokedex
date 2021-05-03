import store from '~/store';

import { setDetails } from '../../store/ducks/details';
import LoadPokemon from '~/services/api/loadPokemon';

export async function loadPokemonSaga({ payload: name }) {
  try {
    const result = await LoadPokemon(name);

    store.dispatch(setDetails(result));
  } catch (error) {
    console.log('ERROR');
  }
}
