import React, {memo} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Route from './Route';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import {ICON_SIZE} from 'constants/appFonts';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Navigator
      initialRouteName={Route.Home.Id}
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{backgroundColor: colors.surface}}>
      <Screen
        component={Route.Home.Page}
        name={Route.Home.Id}
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={ICON_SIZE.NORMAL} />
          ),
        }}
      />
      <Screen
        component={Route.Profile.Page}
        name={Route.Profile.Id}
        options={{
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="person"
              color={color}
              size={ICON_SIZE.NORMAL}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default memo(MainBottomTabNavigator);
