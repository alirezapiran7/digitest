import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const height15 = (width < height ? height : width) / 16;
const metrics = {

  s5: 5,
  s8: 8,
  s10: 10,
  s14: 14,
  s16: 16,
  s20: 20,
  s30: 30,
  s40: 40,
  s50: 50,
  s60: 60,

  borderWidth: 0.4,
  statusBar: Platform.OS === 'ios' ? 40 : 30,

  horizontalLineHeight: 1,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  drawerWidth: (2 / 3) * width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  buttonRadius: 4,
  standardRadius: 8,

  componentRadius: 16,

  loginElement: 48,

  margin: 8,
  xMargin: 12,
  xxMargin: 16,

  text: {
    smallxx: 8,
    smallx: 10,
    samll: 12,
    medium: 14,
    large: 16,
    xl: 18,
    xxl: 20,
    vl: 22,
    vxl: 24,
    vxxl: 26,
  },

  icons: {
    tiny: 15,
    small: 20,
    smallx: 25,
    medium: 30,
    large: 45,
    xl: 50,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;