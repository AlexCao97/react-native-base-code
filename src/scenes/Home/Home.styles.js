import {StyleSheet} from 'react-native';
import {scale} from 'utils/responsive';

const styles = colors =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      padding: scale(10),
    },
  });

export default styles;
