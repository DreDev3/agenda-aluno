document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/aluno/listar')
    .then((response) => response.json())
    .then((data) => {
      const tabela = document.getElementById('tabela-corpo');
      tabela.innerHTML = '';
console.log(data);

      data.forEach((contato) => {
        const row = `
                    <tr>
                        <td>${contato.nome}</td>
                        <td>${contato.disciplina}</td>
                        <td>${contato.nota}</td>
                    </tr>
                `;
        tabela.innerHTML += row;
      });
    })
    .catch((error) => console.error('Erro ao carregar contatos:', error));
});

function confirmarExclusao(id) {
  if (confirm('Deseja realmente excluir este contato?')) {
    fetch(`URL - api/${id}`, { method: 'DELETE' })
      .then(() => location.reload())
      .catch((error) => console.error('Erro ao excluir contato:', error));
  }
}