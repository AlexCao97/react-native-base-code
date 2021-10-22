import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import Route from './Route';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Navigator drawerContent={() => <DrawerContent />}>
      <Screen
        component={Route.MainStackNavigator.Page}
        name={Route.MainStackNavigator.Id}
        options={{
          headerShown: false,
          headerTitle: 'Home',
        }}
      />
    </Navigator>
  );
};
