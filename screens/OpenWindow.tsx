import React, { FunctionComponent, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
export interface Props {}
const Item = ({ title, url }) => {
  const [wind, setWind] = useState<boolean>(false);
  const onClick = () => {
    console.log('http://192.168.1.1/cuasobancong=' + (!wind ? 'on' : 'off'));
    
    fetch(`http://192.168.1.1/cuasobancong=${!wind ? 'on' : 'off'}` );
    setWind(!wind);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fc8f51',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingLeft: 8,
        margin: 12,
      }}>
      <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{title}</Text>
      <TouchableWithoutFeedback onPressIn={onClick}>
        <View
          style={{
            padding: 8,
            backgroundColor: '#fac384',
            borderRadius: 8,
            width: '30%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>{wind ? 'Đóng' : 'Mở'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const OpenWindow: FunctionComponent<Props> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:8, alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:28}}>
        Ban công
        </Text>
      </View>
      <Item url={'http://192.168.1.1/cuasobancong='} title={'Cửa sổ'} />
    </SafeAreaView>
  );
};

export default OpenWindow;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
