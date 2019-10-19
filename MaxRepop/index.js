import {Navigation} from 'react-native-navigation';
import {Images} from './src/resources';
import LaunchScreen from './src/screens/LaunchScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

Navigation.registerComponent('maxrepop.LaunchScreen', () => LaunchScreen);
Navigation.registerComponent(
  'maxrepop.OnboardingScreen',
  () => OnboardingScreen,
);

const bottomTabs = {
  children: [
    {
      component: {
        name: 'maxrepop.LaunchScreen',
        options: {
          bottomTab: {
            icon: Images.circle,
            text: 'Tab 1',
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
            text: 'Tab 2',
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
