# Projeto CRUD com React Native

Este é um projeto CRUD (Create, Read, Update, Delete) desenvolvido em React Native, onde é possível cadastrar usuários, visualizar uma lista de usuários cadastrados, e remover usuários. O armazenamento temporário é feito localmente.

## Estrutura do Projeto
```
📦 src
├── 📁 assets -> Imagens do app
├── 📁 components -> Componentes reutilizáveis (ex: BotaoArredondado)
├── 📁 telas -> Telas principais (Login, Cadastro, Perfil, Lista)
├── 📁 services -> Gerenciamento dos dados dos usuários na aplicação, simulando um pequeno "banco de dados em memória".
├── 📁 styles -> Estilos organizados por tela
├── App.js -> Entrada principal do app
```

## 🔍 Telas do App

- **Tela de Login**: Uma tela de login simples onde o usuário pode inserir seu e-mail e senha para acessar o aplicativo.
- **Tela de Cadastro**: Uma tela de cadastro de usuário
- **Tela de Perfil**: Nesta tela, o usuário pode visualizar e editar seu perfil. Além disso, há a opção de excluir a conta e visualizar a lista de usuários cadastrados.
     - Obs.: **Exclusão de conta:** A funcionalidade de exclusão de conta não realiza uma exclusão real e definitiva dos dados. Atualmente, ela remove apenas o usuário corrente da lista local de usuários, e não há persistência em banco de dados ou armazenamento externo. Ou seja, os dados são mantidos apenas em memória durante a execução da aplicação.
- **Tela de Lista de Usuários**: Esta tela exibe uma lista dos usuários cadastrados, permitindo assim visualizar todos os usuários registrados no sistema.

      
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
