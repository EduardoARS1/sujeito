
var area = document.getElementById('area');

//document é o body no javascript
//getElementById é para pegar o id do elemento no html que foi digitado

function entrar(){

    var nome = prompt('Seu nome?')

    if(nome === "" || nome === null){
        alert('Ops, é necessário digitar o seu nome!');
        area.innerHTML = 'Clique novamente para acessar...';// o innerHTML reescreve o conteúdo de area

    }
    else{

        area.innerHTML = 'Olá ' + nome + " ";
   
        let botaoSair = document.createElement('button'); //cria o botao
        botaoSair.innerText = 'Desloar'; //insere o texto no botão criado
        botaoSair.onclick = sair; //adiciona um evento ao botão e insere no botão a função que será criada abaixo

        area.appendChild(botaoSair); // acredito que adiciona no elemento o botão na continuação do conteúdo
    }

}

function sair(){
    alert('Voce realizou o logout!'); //exibe a janela com o texto
    area.innerHTML = 'Ate mais!...'; //altera o h2 para o texto
}