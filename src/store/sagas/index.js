import { takeLatest, all } from 'redux-saga/effects';

import { DetailsTypes } from '~/store/ducks/details';
import { loadPokemonSaga } from './detailsSaga';

export default function* rootSaga() {
  yield all([
    // LOAD DETAIL POKEDEMON
    takeLatest(DetailsTypes.LOAD_POKEMON, loadPokemonSaga),
  ]);
}
