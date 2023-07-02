import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import Navigation from './src/navigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
