import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import ContactImg from '@/assets/images/menu/espresso.jpg'

const contact = () => {
  return (
    <View style={style.container}>

      <ImageBackground source={ContactImg} style={style.img}>
        <View style={style.darkTint}>
          <Text style={style.ContactText}>Reach us by this numbers!</Text>

          <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
            <Text style={[style.ContactText, style.text]}>
              Phone: 123-456-7890
            </Text>
            <Text style={[style.ContactText, style.text]}>
              Email : test@gmail.com
            </Text>
          </View>
        </View>


      </ImageBackground>
    </View>
  )
}
const style = StyleSheet.create({
  container:
  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  darkTint: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '100%',
    height: '100%',
  },
  ContactText:
  {
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  }
})
export default contact