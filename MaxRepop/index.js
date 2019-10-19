import {Navigation} from 'react-native-navigation';
import {Images} from './src/resources';
import LaunchScreen from './src/screens/LaunchScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

Navigation.registerComponent('maxrepop.LaunchScreen', () => LaunchScreen);
Navigation.registerComponent(
  'maxrepop.OnboardingScreen',
  () => OnboardingScreen,
);
Navigation.registerComponent('maxrepop.ProfileScreen', () => ProfileScreen);

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
