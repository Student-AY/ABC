import { View, Text, Button , TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Text style={{fontWeight:'bold',textDecorationLine:'underline',color:'#2f6499'}}>HomeScreen</Text>
      <TouchableOpacity>
          <Text 
          onPress={() => {navigation.navigate('Camera')}}
          style={styles.textdeco}
          >Open Camera</Text>
      </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
    textdeco:{
        fontFamily:'serif',
        fontWeight:'bold',
        marginTop:50,
        fontSize:20,
        color:'#2f6499',
        borderWidth:2,
        padding:15,
        borderRadius:60,
        
    }
})
export default HomeScreen