// Função para adicionar um aluno à tabela
function adicionarAluno(nome, idade, cidade, observacao, pacote) {
    var tabela = document.getElementById('tabelaAlunos');
    var newRow = tabela.insertRow(tabela.rows.length);
    var celulaNome = newRow.insertCell(0);
    var celulaIdade = newRow.insertCell(1);
    var celulaCidade = newRow.insertCell(2);
    var celulaObservacao = newRow.insertCell(3);
    var celulaPacote = newRow.insertCell(4);
    var celulaAcoes = newRow.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaIdade.innerHTML = idade;
    celulaCidade.innerHTML = cidade;
    celulaObservacao.innerHTML = observacao;
    celulaPacote.innerHTML = pacote;

    // Adiciona botões de ação
    var editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = 'Editar';
    editBtn.addEventListener('click', function () {
        editarAluno(nome, idade, cidade, observacao, pacote);
    });

    var deleteBtn = document.createElement('button');
deleteBtn.className = 'delete-btn';
deleteBtn.innerHTML = 'Excluir';
deleteBtn.addEventListener('click', function () {
    excluirAluno(nome, idade, cidade, observacao, pacote);
});

    celulaAcoes.appendChild(editBtn);
    celulaAcoes.appendChild(deleteBtn);

    // Limpa os campos do formulário após a matrícula
    document.getElementById('nomeAluno').value = '';
    document.getElementById('idadeAluno').value = '';
    document.getElementById('cidadeAluno').value = '';
    document.getElementById('observacaoAluno').value = '';
    document.getElementById('pacoteAluno').value = '';
}

// Função para verificar se todos os campos estão preenchidos
function verificarCamposPreenchidos() {
    var nome = document.getElementById('nomeAluno').value;
    var idade = document.getElementById('idadeAluno').value;
    var cidade = document.getElementById('cidadeAluno').value;
    var observacao = document.getElementById('observacaoAluno').value;
    var pacote = document.getElementById('pacoteAluno').value;

    if (!nome || !idade || !cidade || !observacao || !pacote) {
        alert('Preencha todos os campos antes de matricular.');
        return false;
    }

    return true;
}


function editarAluno(nome, idade, cidade, observacao, pacote){
    if (confirm("Deseja realmente editar?")){
         document.getElementById('nomeAluno').value = nome;
         document.getElementById('idadeAluno').value = idade;
         document.getElementById('cidadeAluno').value = cidade;
         document.getElementById('observacaoAluno').value = observacao;
         document.getElementById('pacoteAluno').value = pacote;
    }
}

function excluirAluno(nome, idade, cidade, observacao, pacote) {
    if (confirm("Deseja realmente excluir?")) {
        var tabela = document.getElementById('tabelaAlunos');
        var rows = tabela.rows;
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i];
            if (
                row.cells[0].innerHTML === nome &&
                row.cells[1].innerHTML === idade &&
                row.cells[2].innerHTML === cidade &&
                row.cells[3].innerHTML === observacao &&
                row.cells[4].innerHTML === pacote
            ) {
                tabela.deleteRow(i);
                break;
            }
        }
        // Limpa os campos do formulário após a exclusão
        document.getElementById('nomeAluno').value = '';
        document.getElementById('idadeAluno').value = '';
        document.getElementById('cidadeAluno').value = '';
        document.getElementById('observacaoAluno').value = '';
        document.getElementById('pacoteAluno').value = '';
    }
}
//função para salvar a matrícula
function salvar() {
    if (verificarCamposPreenchidos()) {
        var nome = document.getElementById('nomeAluno').value;
        var idade = document.getElementById('idadeAluno').value;
        var cidade = document.getElementById('cidadeAluno').value;
        var observacao = document.getElementById('observacaoAluno').value;
        var pacote = document.getElementById('pacoteAluno').value;

        // Chama a função para adicionar o aluno à tabela
        adicionarAluno(nome, idade, cidade, observacao, pacote);

        alert('Matrícula salva!');
    }
}
