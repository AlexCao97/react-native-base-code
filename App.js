/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {BackHandler, Alert, StatusBar} from 'react-native';
import Route from 'navigator/Route';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from 'appRedux/store/configureStore';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {isEmpty} from 'lodash';
import merge from 'deepmerge';
import RootNavigator from 'navigator/RootNavigator';
import {getData, storeData} from 'utils/appUtils';
import {ThemeContext} from 'context/ThemeContext';
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const App = () => {
  const navigationRef = useRef();

  const [themeText, setThemeText] = useState('light');
  let theme = themeText === 'light' ? CombinedDefaultTheme : CombinedDarkTheme;
  const [statusBarStyle, setStatusBarStyle] = useState('light-content');

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return onBackPress(navigationRef);
      },
    );
    getTheme();
    return () => {
      backHandler.remove();
    };
  }, []);

  const toggleTheme = async () => {
    const nextTheme = themeText === 'light' ? 'dark' : 'light';
    await storeData('theme', nextTheme);
    setThemeText(nextTheme);
  };

  useEffect(() => {
    if (themeText === 'light') {
      setStatusBarStyle('light-content');
    } else {
      setStatusBarStyle('dark-content');
    }
  }, [themeText]);

  const getTheme = async () => {
    let themeLocal = await getData('theme');
    setThemeText(isEmpty(themeLocal) ? 'light' : themeLocal);
  };

  const preferences = useMemo(
    () => ({
      toggleTheme,
      themeText,
    }),
    [toggleTheme, themeText],
  );

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ThemeContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
              <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
              />
              <RootNavigator toggleTheme={toggleTheme} />
            </NavigationContainer>
          </PaperProvider>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const onBackPress = navigationRef => {
  const routesNameShowAlert = [Route.Home.Id];

  if (
    routesNameShowAlert.includes(navigationRef.current.getCurrentRoute().name)
  ) {
    Alert.alert(
      'Exit App',
      'Are you sure you want to exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  }
};
