import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';

export function Details({ navigation, route }) {
   const [pokemonData, setPokemonData] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchPokemonData = async () => {
         const { url } = route.params;
         if (url) {
            try {
               const response = await fetch(url);
               if (response.status !== 200) {
                  throw new Error('Error en la petición');
               }
               const data = await response.json();
               setPokemonData(data);
            } catch (error) {
               console.error('Error fetching Pokémon data:', error);
            } finally {
               setLoading(false);
            }
         } else {
            setLoading(false);
         }
      };

      fetchPokemonData();
   }, [route.params]);

   function handleClick() {
      navigation.navigate('Home');
   }

   return (
      <TouchableOpacity onPress={handleClick} style={styles.touchable}>
         {loading ? (
            <ActivityIndicator size="large" color="#FF0000" />
         ) : pokemonData ? (
            <View style={styles.view}>
               <Text style={styles.text1}>  
                  {pokemonData.name}
                  </Text>
                  
            <Image source={{ uri: pokemonData.sprites.front_default}}
               style={styles.image}></Image>

               <Text style={styles.text2}>Information</Text>

               <Text style={styles.text2}>Height: 
                  <Text style={styles.text3}> {pokemonData.height} KG</Text>
                  </Text>

               <Text style={styles.text2}>Weight: 
                  <Text style={styles.text3}> {pokemonData.weight} m</Text> 
                  </Text>

            </View>
         ) : (
            <Text style={styles.text}>No Pokémon data available</Text>
         )}
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   touchable: {
      flex: 1,
      backgroundColor: "#d0bdf6", 
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderWidth:20,
      borderColor: '#ffda89',
   },
   text1: {
      fontSize: 70, 
      lineHeight: 28,
      marginVertical: 10,
      color: "white", 
      textTransform: "capitalize",
      fontWeight: "bold",
      textShadowColor: "purple", 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      color:'#ebf3a0',
      marginBottom:20,
      padding:20,
   },
   text2: {
      fontSize: 40,
      lineHeight: 28,
      marginVertical: 10,
      color: "white",
      textTransform: "capitalize",
      fontWeight: "bold",
      textShadowColor: "purple", 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
   },
   text3: {
      fontSize: 30,
      lineHeight: 28,
      marginVertical: 10,
      color: "#ab3ed8",
      textTransform: "capitalize",
      fontWeight: "bold",
      textShadowColor: "white", 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
   },
   view: {
      
      borderColor: "purple", 
      padding: 20,
      alignItems: "center",
      width: "40%",
      shadowColor: "purple", 
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5, 
   },
   image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      backgroundColor: '#ab3ed8',
      alignItems: 'center',
      justifyContent: 'center', 
      borderWidth: 5,
      borderColor: '#ffda89',
    },
});
