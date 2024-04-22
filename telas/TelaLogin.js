import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground} from 'react-native';
import BotaoArredondado from '../componentes/BotaoArredondado';
import Botaozinho from '../componentes/Botaozinho';
import estilo from '../estiloTelaLogin';
import background from '../linhas.png'

export default function TelaLogin({navigation}) {
  return (
    <View style={styles.container}>     
    <ImageBackground 
    source={background} 
    style={{
      flex: 1, 
      resizeMode: 'cover', 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>     
       <View style={{alignItems: 'center'}}>
          <Image
          style={{width: 255, height:105, marginRigth: 5}}
          source= {require('../Logo.png')}
            />
          <View style={{marginVertical: 40}}>
            <Text style={{marginHorizontal: 25, color: '#FDFFFD'}}
                >e-mail:
            </Text>
          <TextInput
            style={estilo.EntradaTexto} 
          />
            <Text style={{marginHorizontal: 25, color: '#FDFFFD'}}
              >senha:
            </Text>
          <TextInput
          style={estilo.EntradaTexto}
          secureTextEntry
          />
          </View>
      <BotaoArredondado 
        title="ACESSAR" 
         onPress={() => navigation.push('Perfil')} 
      /> 
         <Botaozinho 
        title="Esqueci a senha..." 
        onPress={ () => alert('Insira uma nova senha')} 
      /> 
          <Botaozinho 
        title="Não possui uma conta?" 
        onPress={() => navigation.push('Cadastro')} 
      /> 
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
}); 