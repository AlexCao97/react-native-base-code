import React from 'react';
import {View, Text} from 'react-native';
import styles from './Profile.styles';
import {useTheme} from 'react-native-paper';
import I18n from 'i18n-js';

const ProfileView = props => {
  const {changeLanguageApp = () => {}} = props;
  const {colors} = useTheme();

  return (
    <View style={styles(colors).main}>
      <Text style={{color: colors.text}} onPress={changeLanguageApp}>
        {I18n.t('greeting')}
      </Text>
    </View>
  );
};

export default ProfileView;
