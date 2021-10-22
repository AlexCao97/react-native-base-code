import {Dimensions} from 'react-native';
import {moderateScale} from 'utils/responsive';

// Dimensions
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const DEFAULT_PADDING_HORIZONTAL = moderateScale(16);
export const DEFAULT_PADDING_VERTICAL = moderateScale(16);
export const ITEM_PADDING_VERTICAL = moderateScale(8);
export const DEVICE_WIDTH = deviceWidth;
export const DEVICE_HEIGHT = deviceHeight;
export const BORDER_RADIUS = moderateScale(6);
export const BORDER_RADIUS_BUTTON = moderateScale(20);
export const BORDER_RADIUS_TEXT_INPUT = moderateScale(25);

export default {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
};
