import * as React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'; 




export default function BackgroundImage({ image, index, scrollX }:{ image:any, index:any, scrollX:any } ) {
const { height, width } = useWindowDimensions();
const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
const animatedImageStyle = useAnimatedStyle(() => {
  return {
    width,height,
      opacity: (interpolate(scrollX.value,
          inputRange, [0, 1, 0]
      ))
  };
});
return  <Animated.Image
  key={`image-bg-${index}`}
  source={image}
  resizeMode={ 'cover'}
  style={[
      StyleSheet.absoluteFillObject,
      {
        ...animatedImageStyle
      },
  ]}
  blurRadius={2}
  />
}
 