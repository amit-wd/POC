/**
 * NOTE: This file exists for hot reloading with react-native-navigation
 * Currently that module requires a default es6-style export which is
 * impossible with TypeScript. Fortunately this thin wrapper does the job.
 *
 * You will have to create a similar wrapper for any other screen-level
 * components if you want hot reloading of those screens to work properly
 */
import React from 'react';

import { Home } from 'src/Home';

class HomeScreen extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeScreen;
