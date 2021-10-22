import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export function removeUndefined(object) {
  return _.omitBy(object, _.isUndefined);
}

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('e', e);
    // error reading value
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('e', e);
    // saving error
  }
};
