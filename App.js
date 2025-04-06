import * as React from 'react';
import TelaLogin from './src/telas/TelaLogin';
import TelaCadastro from  './src/telas/TelaCadastro';
import TelaPerfil from './src/telas/TelaPerfil';
import TelaListaUsuarios from './src/telas/TelaListaUsuarios'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={TelaLogin}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={TelaCadastro} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={TelaPerfil} 
        />
        <Stack.Screen 
          name="ListaUser" 
          component={TelaListaUsuarios} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


