import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoCamera(props) {
  const {title, onPress} = props;
   const showLogo = props.showLogo || false;

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 5,
          
        }}
      >
    {showLogo && 
          <Image
            source={require('../assets/camera.png')}
          />
        }
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoCamera;