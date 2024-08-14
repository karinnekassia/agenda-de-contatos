document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Criando uma nova linha na tabela
    var novaLinha = document.createElement('tr');

    // Criando as células para nome e telefone
    var colunaNome = document.createElement('td');
    var colunaTelefone = document.createElement('td');

    // Definindo os valores das células
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    // Adicionando as células na linha
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    // Adicionando a nova linha na tabela
    document.querySelector('#tabela-contatos tbody').appendChild(novaLinha);

    // Limpando os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
