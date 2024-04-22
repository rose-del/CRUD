import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function BotaoArredondado(props) {
  const {title, onPress} = props;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: '#B2D8D3',
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,        
        }}
      >
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoArredondado;