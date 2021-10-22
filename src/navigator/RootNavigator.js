import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Route from './Route';
const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName={Route.MainBottomTabNavigator.Id}
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}>
      <Screen
        component={Route.DrawerNavigator.Page}
        name={Route.DrawerNavigator.Id}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
export default RootNavigator;
