import Home from './screens/Home';
import About from './screens/About';
import Scroll from './screens/Scroll';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';

const AppNavigator = createStackNavigator(
  {
    HomeNav: Home,
    AboutNav: About,
    LoginNav: Login,
    ScrollNav: Scroll
  },
  {
    initialRouteName: 'HomeNav',
  }
);



export default createAppContainer(AppNavigator);
