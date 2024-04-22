import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, View, StyleSheet,TextInput,Image, ImageBackground} from 'react-native';
import BotaoTelaC from '../componentes/BotaoTelaC';
import estiloTelaCadastro from '../estiloTelaCadastro';
import usuarioService from '../services/UsuarioService';
import background from '../linhas.png'

export default function TelaCadastro({navigation}) {

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const criarConta = () => {
  const newUser = {
    nomeCompleto: nomeCompleto,
    email: email,
    senha: senha
  };
  usuarioService.adicionarUsuario(newUser);
  usuarioService.setUsuarioCorrente(newUser);
  navigation.push('Perfil');
};

  return (
    <View style={styles.container}>         
  <ImageBackground source={background} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>     
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'       
      }}
    >
    <Image style={{width: 255, height: 105, marginRight: 5}}
    source={require('../Logo.png')}/>
      <View
       style={{
            marginVertical: 40
          }}
          >
          <Text
        style={{
              marginHorizontal: 25,
              color: '#FFFFFF'
               }}
            >Nome completo:
          </Text>
        <TextInput
          value={nomeCompleto}
          onChangeText={newNomeCompleto => setNomeCompleto(newNomeCompleto)}
          style={estiloTelaCadastro.EntradaTexto}
        />
          <Text
            style={{
              marginHorizontal: 25,
              color: '#FFFFFF'
            }}
          >e-mail:
          </Text>
          <TextInput
            value={email}
            onChangeText={newEmail => setEmail(newEmail)}
            style={estiloTelaCadastro.EntradaTexto} 
          />
          <Text
            style={{
              marginHorizontal: 25,
              color: '#FFFFFF'
               }}
              >senha:
          </Text>
        <TextInput
          value={senha}
          onChangeText={newSenha => setSenha(newSenha)}
          style={estiloTelaCadastro.EntradaTexto}
          secureTextEntry
        />
         <Text
        style={{
              marginHorizontal: 25,
              color: '#FFFFFF'
               }}
            >confirmar senha:
         </Text>
        <TextInput
          style={estiloTelaCadastro.EntradaTexto}
          secureTextEntry
        />
      </View>
      <BotaoTelaC 
        title="CRIAR CONTA" 
       onPress={criarConta}
      />      
      <BotaoTelaC 
        title="Entrar com o google" 
        onPress={() => navigation.push('Login')} 
        showLogo={true}        
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