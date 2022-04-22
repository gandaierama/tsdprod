
import React, {useState, setState} from "react";
import {Image, ImageBackground, View, Text, StyleSheet } from 'react-native';
const HeaderPages = ({title}) => {
  return(
    <View style={{  height: '25%' }}>
          <ImageBackground source={require('../../assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
    resizeMode: "cover",
    height: '120%', // the image height
    width: '100%',
    paddingHorizontal: 20,
    left:0,
    top: undefined
  }}>
      <View style={{  flexDirection:'row', alignItems: "center" , height: '50%' }}>
       <Image source={require('../../assets/logo.png')} style={{ width: 70, height: 70, marginLeft: 20 }}/>
       <Text style={{  color: '#fff', fontSize: 18, marginLeft: 20 }}>{title}</Text>
      </View>
    </ImageBackground >  
    </View>
    )
}

const styles = StyleSheet.create({

  bg: {
    height:'100%',
    justifyContent: "center",
    width: '100%',
    top: 0,
  },

});
export default HeaderPages;