import ProfileContainer from 'scenes/Profile/Profile.container';
import HomeContainer from '../scenes/Home/Home.container';
import SettingContainer from '../scenes/Setting/Setting.container';
import {DrawerNavigator} from './DrawerNavigator';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import {MainStackNavigator} from './MainStackNavigator';

const Route = {
  MainBottomTabNavigator: {
    Id: 'MainBottomTabNavigator',
    Page: MainBottomTabNavigator,
  },

  MainStackNavigator: {
    Id: 'MainStackNavigator',
    Page: MainStackNavigator,
  },

  DrawerNavigator: {
    Id: 'DrawerNavigator',
    Page: DrawerNavigator,
  },
  Home: {Id: 'Home', Page: HomeContainer},
  Setting: {Id: 'Setting', Page: SettingContainer},
  Profile: {Id: 'Profile', Page: ProfileContainer},
};

export default Route;
