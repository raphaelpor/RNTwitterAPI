// @flow

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Feed from './Feed';
import Header from './Header';

const RNTwitterAPI = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="Feed"
        renderTitle={() => <Header />}
        component={Feed}
        initial={true}
      />
    </Scene>
  </Router>
);

export default RNTwitterAPI;
