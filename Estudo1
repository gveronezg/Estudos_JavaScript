/*
EXERCÍCIO:
0 - Obter o usuário
1 - Obter o numero de telefone de um usuário a partir do seu ID
2 - Obter o endereço do usuário a partir do seu ID
*/

// FUNÇÃO OBTER USUARIO
function obterUsuario(callback) {
  setTimeout(function() { // setTimeout realiza a ação após o tempo setado
    return callback(null, { // callback com primeiro parametro vazio para retornar o erro caso ocorra, ou executar a instrução caso não ocorra.
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000) // realiza a instrução após mil milisegundos
}

// FUNÇÃO OBTER TELEFONE
function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: 992345678,
      ddd: 16
    })
  }, 2000)
}

// FUNÇÃO OBTER ENDEREÇO
function obterEndereco(idUsuario, callback){
  setTimeout(() => {
    return callback(null, {
      rua: 'Rua Dos Bobos',
      numero: 0
    })
  },2000)
}

obterUsuario(function resolverUsuario(error, usuario){
  // em js valores (null || '' || 0) === false
  if(error){
    console.error('Deu ruim em USUÁRIO!', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
    if(error1){
      console.error('Deu ruim em TELEFONE!', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
      if(error2){
        console.error('Deu ruim em ENDEREÇO!', error)
        return;
      }
      console.log(`
        Nome: ${usuario.nome}
        Data de Nascimento: ${usuario.dataNascimento}
        Endereço: ${endereco.rua}, Nº ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})
