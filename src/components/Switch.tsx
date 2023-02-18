import { Colors } from '@myapp/utilities/Colors';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  runOnUI,
  withTiming,
  runOnJS,
  interpolateColor,
} from 'react-native-reanimated';
// import colors from '../utils/colors';
// import commonStyles from '../utils/commonStyles';

const PADDING = 2;
const CIRCLE_SIZE = 20;
const CONTAINER_SIZE = 40;
const SIZE = CONTAINER_SIZE - PADDING * 2 - CIRCLE_SIZE;
// for arabic slide postion
const SLIDE_SIZE = I18nManager.isRTL ? -1 * SIZE : SIZE;

interface SwitchProps {
  defaultValue: boolean;
  onValueChange: (isActive: boolean) => void
}

function Switch({ defaultValue, onValueChange }: SwitchProps) {
  const animatedValue = useSharedValue(defaultValue ? SLIDE_SIZE : 0);

  const toggleSwitch = () => {
    'worklet';
    const isActive = animatedValue.value == 0;
    const scrollTo = isActive ? SLIDE_SIZE : 0;

    animatedValue.value = withTiming(scrollTo, {}, () => {
      runOnJS(onValueChange)(isActive);
    });
  };

  const onPress = () => runOnUI(toggleSwitch)();

  const circleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedValue.value }],
    };
  });

  const containerStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, SLIDE_SIZE],
      ['rgb(51, 51, 51)', 'rgb(211, 10, 10)'],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <View style={[styles.row]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.container, containerStyles]}>
          <Animated.View style={[styles.circle, circleStyles]} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: Colors.white,
  },
  container: {
    width: CONTAINER_SIZE,
    backgroundColor: Colors.darkGrey,
    padding: PADDING,
    borderRadius: CIRCLE_SIZE,
  },
});

export default Switch;