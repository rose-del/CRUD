import React, { useState } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Alert} from 'react-native';
import BotaoArredondado from '../components/BotaoArredondado';
import Botaozinho from '../components/Botaozinho';
import estilo from '../styles/estiloTela';
import estiloInput from '../styles/estiloTextInput';
import background from '../assets/linhas.png';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    navigation.push('Perfil');
  }

  return (
    <View style={estilo.container}>
      <ImageBackground source={background} style={estilo.background}>
        <View style={estilo.inner}>
          <Image style={estilo.logo} source={require('../assets/Logo.png')}/>

          <View style={estilo.form}>
            <Text style={estilo.label}>E-mail:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Text style={estilo.label}>Senha:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Digite sua senha"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <BotaoArredondado title="ACESSAR" onPress={handleLogin} />
          <Botaozinho title="Esqueci a senha..." onPress={() => alert('Insira uma nova senha')} />
          <Botaozinho title="Não possui uma conta?" onPress={() => navigation.push('Cadastro')} />

        </View>
      </ImageBackground>
    </View>
  );
}