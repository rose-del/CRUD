import React, {useState} from 'react';
import { Text, View, TextInput, Image, ImageBackground} from 'react-native';
import BotaoTelaC from '../components/BotaoTelaC'
import estilo from '../styles/estiloTela';
import estiloInput from '../styles/estiloTextInput';
import usuarioService from '../services/UsuarioService';
import background from '../assets/linhas.png';

export default function TelaCadastro({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const criarConta = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

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
    <View style={estilo.container}>
      <ImageBackground source={background} style={estilo.background}>
        <View style={estilo.inner}>
          <Image style={estilo.logo} source={require('../assets/Logo.png')}/>

          <View style={estilo.form}>
            <Text style={estilo.label}>Nome completo:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Digite seu nome"
              placeholderTextColor="#ccc"
              value={nomeCompleto}
              onChangeText={setNomeCompleto}
            />

            <Text style={estilo.label}>E-mail:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
            />
            
            <Text style={estilo.label}>Senha:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Digite sua senha"
              placeholderTextColor="#ccc"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            
            <Text style={estilo.label}>Confirmar senha:</Text>
            <TextInput
              style={estiloInput.caixaTexto}
              placeholder="Confirme sua senha"
              placeholderTextColor="#ccc"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>

          <BotaoTelaC title="CRIAR CONTA" onPress={criarConta}/>
          <BotaoTelaC title="Entrar com o Google" onPress={() => navigation.push('Login')} showLogo={true}/>
        </View>
      </ImageBackground>
    </View>
  );
}