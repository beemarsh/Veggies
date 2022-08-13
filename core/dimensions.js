import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const width = windowWidth > 370 ? 'big' : 'small';
export const height = windowHeight > 650 ? 'big' : 'small';
