import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Header} from 'components/Header';
import Route from './Route';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      screenOptions={{
        header: props => (
          <Header
            options={props.options}
            navigation={props.navigation}
            route={props.route}
            back={props.back}
          />
        ),
      }}>
      <Stack.Screen
        name={Route.MainBottomTabNavigator.Id}
        component={Route.MainBottomTabNavigator.Page}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          return {headerTitle: routeName};
        }}
      />
      <Stack.Screen
        name={Route.Setting.Id}
        component={Route.Setting.Page}
        options={{headerTitle: 'Setting'}}
      />
    </Stack.Navigator>
  );
};
