import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/images/portada/backCard.jpeg'; 

export function Card({ data = null, navigation }) {
   function handleClick() {
      navigation.navigate("Details", { url: data?.url });
   }

   return (
      <TouchableOpacity style={styles.touchable} onPress={handleClick}>
         <ImageBackground source={BackgroundImage} style={styles.container} imageStyle={styles.image}>
            <Text style={styles.pokemon}>{data?.name}</Text>
         </ImageBackground>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   touchable: {
      margin: 10,
   },
   container: {
      height: 400,
      width: 300,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      overflow: 'hidden', 
   },
   image: {
      resizeMode: 'cover',
      borderRadius: 20, 
   },
   pokemon: {
      color: "#7f00b2",
      fontSize: 40,
      fontWeight: "bold",
      textShadowColor: "white",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
   },
});
