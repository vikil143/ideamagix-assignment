import { Colors } from '@myapp/utilities/Colors';
import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
// import colors from '../utils/colors';

interface CheckBoxProps {
  selected: boolean;
  activeColor?: string;
  inActiveColor?: string;
  size?: number;
  onPress: () => void;
}

export default function CheckBox({
  selected,
  activeColor = Colors.darkBlue,
  inActiveColor = 'transparent',
  size = 20,
  onPress,
}: CheckBoxProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          borderWidth: selected ? 0 : 2,
          borderColor: Colors.lightGrey,
          backgroundColor: selected ? activeColor : inActiveColor,
          justifyContent: 'center',
          alignItems: 'center',
          width: size,
          height: size,
        }}>
        {!!selected && (
          <Image
            style={{
              width: size - 8,
              height: size - 8,
              resizeMode: 'contain',
              tintColor: Colors.white,
            }}
            source={require('../assests/icons/tick.png')}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}