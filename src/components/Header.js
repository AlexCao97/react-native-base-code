import {ICON_SIZE} from 'constants/appFonts';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Appbar, useTheme} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Header = ({options, navigation, route, back}) => {
  const {colors} = useTheme();
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : route.name;

  return (
    <Appbar.Header theme={{colors: {primary: colors.surface}}}>
      {back ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons
            name="chevron-left"
            size={ICON_SIZE.NORMAL}
            color={colors.text}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <MaterialIcons
            name="menu"
            size={ICON_SIZE.NORMAL}
            color={colors.text}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
