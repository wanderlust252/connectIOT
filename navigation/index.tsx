/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Gallery from '../screens/Gallery';
import { RootStackParamList } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
} 
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
} 
// const HomeStack = createNativeStackNavigator<RootTabParamList>();

// function HomeStackNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <HomeStack.Navigator
//       initialRouteName="gallery"
//       screenOptions={{
//         header:()=>null,
//       }}>
//       <HomeStack.Screen
//         name="gallery"
//         component={Gallery}
         
//       /> 
//     </HomeStack.Navigator>
//   );
// }
 
