import Home from './screens/Home';
import About from './screens/About';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    HomeNav: Home,
    AboutNav: About,
  },
  {
    initialRouteName: 'HomeNav',
  }
);



export default createAppContainer(AppNavigator);
