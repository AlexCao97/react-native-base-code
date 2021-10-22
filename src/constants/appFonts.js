import {moderateScale} from 'utils/responsive';

// size constants
export const FONT_SIZE_CONST = {
  SMALL: 'SMALL',
  NORMAL: 'NORMAL',
  FIT: 'FIT',
  LARGE: 'LARGE',
};

// fontsize
export const FONT_SIZE = {
  SMALL: moderateScale(12),
  NORMAL: moderateScale(14),
  FIT: moderateScale(16),
  LARGE: moderateScale(18),
  X_LARGE: moderateScale(20),
};

// ICON_SIZE
export const ICON_SIZE = {
  SMALL: moderateScale(16),
  NORMAL: moderateScale(24),
  FIT: moderateScale(26),
  LARGE: moderateScale(30),
  X_LARGE: moderateScale(36),
};
// fontFamily

export default {
  FONT_SIZE,
  FONT_SIZE_CONST,
  ICON_SIZE,
};
