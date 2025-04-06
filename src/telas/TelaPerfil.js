import React, {useState } from 'react';
import { Text, View, TextInput, Image, Button} from 'react-native';
import BotaoCamera from '../components/BotaoCamera';
import estiloPerfil from '../styles/estiloPerfil';
import usuarioService from '../services/UsuarioService';

export default function TelaPerfil({navigation}) {
  
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
  navigation.push('ListaUser');
}

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: 60,
    }}>
    <View style={{ 
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
      }}>
          <Image
            source={require('../assets/fotoP.png')}
          />
          <View style={{marginLeft: -20}}>
            <BotaoCamera
              onPress={() => alert('Enviar')}
              showLogo={true}
            />
          </View>   
     </View>
      <View>
      <Text style={{marginHorizontal: 25, color: 'black',  marginTop: 50}}
          >NOME COMPLETO:
      </Text>
        <TextInput
            value={nomeCompleto}
            style={estiloPerfil.EntradaTexto}
          /> 
            <Text style={{marginHorizontal: 25, color: 'black'}}
              >E-MAIL:
            </Text>
            <TextInput
                value={email}
                style={estiloPerfil.EntradaTexto}
              />    
              <Text style={{marginHorizontal: 25, color: 'black'}}
               >SENHA:
              </Text>
            <TextInput
                value={senha}
                style={estiloPerfil.EntradaTexto}
              /> 
              <View
               style={{
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,
          marginTop: 50        
        }}>
              <Button
                title = "EXCLUIR CONTA"
                onPress={remover} 
                color = '#D8D8D8' 
                /> 
              <View style={{
          borderRadius: 20,
          marginTop: 5        
        }}>  
                <Button
                title = "EXIBIR LISTA DE USUÁRIOS"
                onPress={() => navigation.push('ListaUser')} 
                color = '#B2D8D3' 
                /> 
              </View>
     </View>       
      </View> 
    </View>
  )
}