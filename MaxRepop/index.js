import {Navigation} from 'react-native-navigation';
import {Images} from './src/resources';
import LaunchScreen from './src/screens/LaunchScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ActionsScreen from './src/screens/ActionsScreen';
import DecisionScreen from './src/screens/DecisionScreen';

Navigation.registerComponent('maxrepop.LaunchScreen', () => LaunchScreen);
Navigation.registerComponent(
  'maxrepop.OnboardingScreen',
  () => OnboardingScreen,
);
Navigation.registerComponent('maxrepop.ActionsScreen', () => ActionsScreen);
Navigation.registerComponent('maxrepop.ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('maxrepop.DecisionScreen', () => DecisionScreen);

const bottomTabs = {
  children: [
    {
      component: {
        name: 'maxrepop.ProfileScreen',
        options: {
          bottomTab: {
            icon: Images.circle,
            text: 'Profile',
          },
        },
      },
    },
    {
      component: {
        name: 'maxrepop.ActionsScreen',
        options: {
          bottomTab: {
            icon: Images.action,
            text: 'Actions',
          },
        },
      },
    },
    {
      component: {
        name: 'maxrepop.OnboardingScreen',
        options: {
          bottomTab: {
            icon: Images.tribe,
            text: 'Tribe',
          },
        },
      },
    },
  ],
  options: {},
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs,
    },
  });
});
