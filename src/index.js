import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import RootNavigator from './navigation/RootNavigator';

import store from './store';

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
export default App;
