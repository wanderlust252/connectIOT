import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'; 
import { CartContext, DATA } from '../context/CartContext';
export default function ImageCard({ item, index, scrollX }:{ item:DATA, index:any, scrollX:any } ) {
const { height, width } = useWindowDimensions();
const {addQuatity} = React.useContext(CartContext);
    const CARD_WIDTH = width * 0.9;
    const CARD_HEIGHT = CARD_WIDTH * 1.6;
    const inputRange = [(index - 1) * width, (index) * width, (index + 1) * width]
    const animatedImageStyle = useAnimatedStyle(() => {
      return {
          
          transform: [{
              translateX: (interpolate(scrollX.value,
                  inputRange, [-width * 0.4, 0, width * 0.4]
              ))
          }, {
              scale: (interpolate(scrollX.value,
                  inputRange, [1.5, 1, 1.5]
              ))
          }],
      };
  });
  const animatedContainerStyle = useAnimatedStyle(() => {
      return {
          width: CARD_WIDTH, height: CARD_HEIGHT, justifyContent: 'flex-end', overflow: 'hidden', borderRadius: 10, borderWidth: 2, borderColor: 'white',
          transform: [ {
              scale: (interpolate(scrollX.value,
                  inputRange, [0.8, 1, 0.8]
              ))
          }],
      };
  });
  const onAddItem = ()=>{
    addQuatity(item.id)
  }
  return <View key={index+'img'} style={[styles.container,{height,width}]}>
  <Animated.View style={{
      
    ...animatedContainerStyle,
   
  }}>
      <Animated.Image style={[StyleSheet.absoluteFillObject, {
          ...animatedImageStyle
      }, { position: 'absolute' }]} source={item.img} />
        <View style={{ padding: 10,  }}>
          <Text  style={{ color: '#fff', fontSize: 24, marginBottom: 20,fontWeight:'bold'  }}>{item.name}</Text>
        </View>
        
  </Animated.View>
    <TouchableOpacity activeOpacity={0.9} onPress={onAddItem} style={styles.btn}>
        <View style={styles.quatityView}>
            <Text style={styles.quatityText} >{item.quatity}</Text>
        </View>
        <FontAwesome5 name="cart-plus" size={24} color="#fff" />
    </TouchableOpacity>
</View>
}
const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    btn: {backgroundColor:'#5C7AEA',borderRadius:30,padding:12,
        borderWidth:2, borderColor:'#fff',
        marginTop:-24,marginRight:45, alignSelf:'flex-end'},
    quatityView:{position:'absolute',top:-5,right:-5,borderRadius:20,backgroundColor:'#fff',
        padding:4, height:20,width:20,alignItems:'center',justifyContent:'center'},
    quatityText: {color:'black', fontSize:12, fontWeight:'600'},
});