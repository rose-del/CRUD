import React, { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";

import BotaoCamera from "../components/BotaoCamera";
import BotaoArredondado from "../components/BotaoArredondado";
import estiloPerfil from "../styles/estiloPerfil";
import estiloTextInput from "../styles/estiloTextInput";

import usuarioService from "../services/UsuarioService";

export default function TelaPerfil({ navigation }) {
  const usuarioCorrente = usuarioService.getUsuarioCorrente();
  const usuarios = usuarioService.obterUsuarios();

  const [nomeCompleto, setNomeCompleto] = useState(usuarioCorrente.nomeCompleto);
  const [email, setEmail] = useState(usuarioCorrente.email);
  const [senha, setSenha] = useState(usuarioCorrente.senha);

  function remover() {
    const index = usuarios.indexOf(usuarioCorrente);
    if (index > -1) {
      usuarios.splice(index, 1);
    }
    usuarioService.removerUsuarioCorrente();
    navigation.push("ListaUser");
  }

  return (
    <View style={estiloPerfil.container}>
      <View style={estiloPerfil.imagemContainer}>
        <Image source={require('../assets/fotoP.png')} style={estiloPerfil.imagemPerfil} />
        <BotaoCamera onPress={() => alert('Enviar')} showLogo/>
      </View>

      <View style={estiloPerfil.formulario}>
        <Text style={estiloPerfil.label}>Nome completo:</Text>
        <TextInput value={nomeCompleto} style={estiloTextInput.caixaTexto} />

        <Text style={estiloPerfil.label}>E-mail:</Text>
        <TextInput value={email} style={estiloTextInput.caixaTexto} />

        <Text style={estiloPerfil.label}>Senha:</Text>
        <TextInput value={senha} style={estiloTextInput.caixaTexto} secureTextEntry />

        <View style={estiloPerfil.botoesContainer}>
          <BotaoArredondado title="EXCLUIR CONTA" onPress={remover}/>
          <BotaoArredondado title="VER USUÁRIOS" onPress={() => navigation.push('ListaUser')}/>
        </View>

      </View>
    </View>
  );
}
