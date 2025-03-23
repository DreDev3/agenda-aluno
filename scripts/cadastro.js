document
  .getElementById('formContato')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const contato = {
      nome: document.getElementById('nome').value,
      disciplina: document.getElementById('disciplina').value,
      nota: document.getElementById('nota').value,
    };

    fetch('http://localhost:8080/aluno/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contato),
    })
      .then((response) => console.log( response.json()))
      .then(() => {
        alert('Contato cadastrado com sucesso!');
        window.location.href = 'contatos.html';
      })
      .catch((error) => console.error('Erro ao cadastrar contato:', error));
  });
