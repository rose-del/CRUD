# Projeto CRUD com React Native

Este é um projeto CRUD (Create, Read, Update, Delete) desenvolvido em React Native, onde é possível cadastrar usuários, visualizar uma lista de usuários cadastrados, e remover usuários. O armazenamento temporário é feito localmente.

## Estrutura do Projeto

   - service: Contém o arquivo UsuarioService.js, responsável por gerenciar os usuários.
   - telas: Pasta que contém os arquivo das telas do aplicativo.
   - componentes: Contém componentes (botões) reutilizáveis em várias telas do aplicativo.
   - imagens e estilos: As imagens e estilos utilizadas no projeto estão localizadas diretamente na pasta do projeto CRUD. Embora essa não seja a prática recomendada de organização de arquivos, elas estão disponíveis na raiz do projeto para serem acessadas pelos componentes que as utilizam.

## Telas do Aplicativo

- Tela de Login (TelaLogin.js)
  
    - Uma tela de login simples onde o usuário pode inserir seu e-mail e senha para acessar o aplicativo.
      
- Tela de Perfil (TelaPerfil.js)
  
   - Nesta tela, o usuário pode visualizar e editar seu perfil. Além disso, há a opção de excluir a conta e visualizar a lista de usuários cadastrados.
     
- Tela de Lista de Usuários (TelaListaUsuarios.js)

  - Esta tela exibe uma lista dos usuários cadastrados, permitindo assim visualizar todos os usuários registrados no sistema.
  
## Componentes Reutilizáveis

  - BotaoArredondado: Um botão com um design arredondado.
  - Botaozinho: Um botão menor utilizado para ações secundárias.
  - BotaoCamera: Um botão com um ícone de câmera, usado para ações relacionadas a fotos.

## 🧠 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- JavaScript
- Navegação entre telas com `react-navigation`
- Estilização separada com `StyleSheet`
- Armazenamento temporário via serviço local (`usuarioService.js`)
