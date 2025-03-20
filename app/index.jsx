import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import coffeeBackground from '@/assets/images/iced-coffee.png'

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={coffeeBackground}
        resizeMode='cover'
        style={style.img}
      >
        <Text style={style.text}>Coffee Shop</Text>
        <View style={{ alignItems: 'center' }}>

          <Link href="/contact" style={style.buttom} asChild>
            <Pressable style={style.buttom}>
              <Text style={style.ctaText}>Contact us</Text>
            </Pressable>
          </Link>

          <Link href="/menu" style={style.buttom} asChild>
            <Pressable style={style.buttom}>
              <Text style={style.ctaText}>Menu</Text>
            </Pressable>
          </Link>

        </View>

      </ImageBackground>
    </View>
  )
}
const style = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
    },
    img:
    {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    ,
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 10,
    },
    buttom: {
      fontSize: 20,
      color: 'white',
      backgroundColor: 'rgba(80, 39, 39, 0.88)',
      padding: 10,
      marginTop: 10,
      textAlign: 'center',
      width: "50%",
      fontWeight: 'bold',
    },
    ctaText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }
)
export default app