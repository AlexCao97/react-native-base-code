import React, {useCallback, useEffect} from 'react';
import HomeView from './Home.view';
import {getPostCoinHandle} from 'appRedux/actions/coinActions';
import {useDispatch, useSelector} from 'react-redux';
import I18n from 'react-native-i18n';
import {getLanguage} from 'appRedux/selectors/languageSelector';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);

  useEffect(() => {
    getLanguageLocal();
  }, [getLanguageLocal]);

  const getLanguageLocal = useCallback(() => {
    console.log('language', language);
    I18n.locale = language;
  }, [language]);

  const loadData = useCallback(() => {
    dispatch(
      getPostCoinHandle({
        categories: 35,
        per_page: 10,
        page: 1,
        _embed: true,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return <HomeView />;
};

export default HomeContainer;
