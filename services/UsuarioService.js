class UsuarioService {
  constructor() {
    this.usuarios = [];
    this.usuarioCorrente = null;
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  obterUsuarios() {
    return this.usuarios;
  }

 setUsuarioCorrente(usuario) {
    this.usuarioCorrente = usuario;
  }

 getUsuarioCorrente() {
    return this.usuarioCorrente;
  }

 removerUsuarioCorrente() {
  this.usuarioCorrente = null;
  }
}

const usuarioService = new UsuarioService();
export default usuarioService;
