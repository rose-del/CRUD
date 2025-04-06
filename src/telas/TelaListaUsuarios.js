import React from 'react';
import { View, Text} from 'react-native';
import usuarioService from '../services/UsuarioService';

export default function TelaListaUsuarios() {
  const usuarios = usuarioService.obterUsuarios();
  return (
    <View style={{
      flex: 1,
      padding: 20,
      }}>
     <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      }}
      >Lista de Usuários 
       </Text>
        {usuarios.map((usuario, index) => ( 
          <View key={index} style={{marginBottom: 20}}>
            <Text>Nome: {usuario.nomeCompleto}</Text>
            <Text>Email: {usuario.email}</Text>
            <Text>Senha: {usuario.senha}</Text>
    </View>
  ))}
    </View>
  );
}
