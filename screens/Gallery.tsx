import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { View } from '../components/Themed';
import { CartContext } from '../context/CartContext';
import { RootStackScreenProps } from '../types';
import BackgroundImage from './BackgroundImage';
import ImageCard from './ImageCard';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)
export default function Gallery({ navigation }: RootStackScreenProps<'gallery'>) {
const { height, width } = useWindowDimensions();
const {data} = React.useContext(CartContext)
const scrollX = useSharedValue(0);
const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
scrollX.value = event.contentOffset.x;
        },
    });
return (
    <View style={styles.container}>
      <StatusBar animated={true} style={'light'} />
      {data.map((item, index) => {
               
               return (
                    <BackgroundImage image={item.img} index={index} scrollX={scrollX} />
               );
           })}
      <AnimatedFlatlist
      data={data}
      keyExtractor={(item)=>`item_${item.id}`}
      onScroll={scrollHandler}
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      snapToInterval={width}
      contentContainerStyle={{alignItems:'center',justifyContent:'center',height}}
      renderItem={({item,index})=>{
        return <ImageCard item={item} scrollX={scrollX}  index={index} />
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});