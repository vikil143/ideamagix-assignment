import { ReactElement } from 'react';
import {
    ViewStyle as RNViewStyle,
    ImageStyle as RNImageStyle,
    ColorValue,
} from 'react-native';

interface hasChild {
    children: ReactElement;
}

interface ViewStyles {
    style: RNViewStyle | RNViewStyle[];
}

interface ContainerViewStyles {
    containerStyle: RNViewStyle | RNViewStyle[];
}

interface ImageStyles {
    imageStyle: RNImageStyle;
}

interface OnPress {
    onPress: () => void;
}

interface PaddingMarginProps {
    padding: number;
    margin: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    paddingHorizontal: number;
    paddingVertical: number;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
    marginHorizontal: number;
    marginVertical: number;
}

interface LayoutProps {
    width: number;
    height: number;
}

interface TintColor {
    tintColor: ColorValue;
}

interface ColorInterface {
    color: ColorValue;
}

interface ModalProps {
    show: boolean;
    hide: () => void;
}

interface LabelValueTypes {
    label: number;
    value: number;
}

interface DropDownItem extends LabelValueTypes { }

type TwoTuple<T> = [T, T];

export type {
    hasChild,
    ViewStyles,
    OnPress,
    ImageStyles,
    PaddingMarginProps,
    LayoutProps,
    TintColor,
    ContainerViewStyles,
    ModalProps,
    TwoTuple,
    DropDownItem,
    ColorInterface,
};