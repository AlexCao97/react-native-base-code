import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProfileView from './Profile.view';
import {changeLanguageLocal} from 'appRedux/actions/languageActions';
import {getLanguage} from 'appRedux/selectors/languageSelector';
import I18n from 'react-native-i18n';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);

  const changeLanguageApp = useCallback(() => {
    const nextLanguage = language === 'vi' ? 'en' : 'vi';
    dispatch(changeLanguageLocal(nextLanguage));
    I18n.locale = nextLanguage;
  }, [dispatch, language]);

  return <ProfileView changeLanguageApp={changeLanguageApp} />;
};

export default ProfileContainer;
