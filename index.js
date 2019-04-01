import { NativeModules } from 'react-native';

const { RNVibrantColor } = NativeModules;

export const colorsFromUrl = url => {
    return RNVibrantColor.colorsFromUrl(url);
};
