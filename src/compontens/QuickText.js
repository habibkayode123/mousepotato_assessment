import React from 'react';
import {Text, View} from 'react-native';
import {Theme} from '../shared';

const {SIZES, FONT_FAMILY, FONT_SIZES, COLORS} = Theme;

const QuickText = ({icon: Icon, value, active, hasMarginRight = true}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: hasMarginRight ? SIZES.base : 0,
      }}>
      <Icon />
      <Text
        style={{
          fontSize: FONT_SIZES.small,
          fontFamily: FONT_FAMILY.SemiBold,
          color: active ? COLORS.secondary : COLORS.black,
          marginLeft: 4,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default QuickText;
