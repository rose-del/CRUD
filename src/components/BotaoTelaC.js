import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoTelaC(props) {
  const {title, onPress} = props;
  const showLogo = props.showLogo || false;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          backgroundColor: '#B2D8D3',
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,      
          alignItems: 'center'
        }}
      >
        {showLogo && 
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../assets/google.png')}
          />
        }
        <Text style={{color:'#000000'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoTelaC;