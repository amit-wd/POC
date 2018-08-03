import { AppRegistry } from 'react-native';

import HelloScreen from 'src/HelloScreen';

AppRegistry.registerComponent('rnts3', () => HelloScreen);

import { Navigation } from 'react-native-navigation';
import { Award } from './tabs/award';
import { Mobstar } from './tabs/mobstar';
import { Nomination } from './tabs/nomination';
import { HistoryPage } from './tabs/history';
import { Profile } from './tabs/profile';

Navigation.registerComponent('rnts3.FirstTabScreen', () => Award);
Navigation.registerComponent('rnts3.SecondTabScreen', () => Mobstar);
Navigation.registerComponent('rnts3.ThirdTabScreen', () => Nomination);
Navigation.registerComponent('rnts3.FourthTabScreen', () => HistoryPage);
Navigation.registerComponent('rnts3.FifthTabScreen', () => Profile);

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Mobstar',
      screen: 'rnts3.FirstTabScreen', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Mobstar',
    },
    {
      label: 'Award',
      screen: 'rnts3.SecondTabScreen',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Award',
    },
    {
      label: 'Nomination',
      screen: 'rnts3.ThirdTabScreen',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Nomination',
    },
    {
      label: 'History',
      screen: 'rnts3.FourthTabScreen',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'History',
    },
    {
      label: 'Profile',
      screen: 'rnts3.FifthTabScreen',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Profile',
    },
  ],
});
