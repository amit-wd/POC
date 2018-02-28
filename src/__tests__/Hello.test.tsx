import 'react-native';
import * as React from 'react';
import { Hello } from 'src/Hello';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const tree = create(<Hello />);
  tree;
});
