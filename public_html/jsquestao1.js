
var array = [];

function onClickSalvar() {
    const titulo = document.getElementById("titulo").value;
    console.log(titulo);
    array.push(titulo);
}

function onClickResultados() {
    let tabela = document.getElementById("tabela");
    array.forEach(function(a) {
        tabela.innerHTML = tabela.innerHTML+'<tr><td>Titulo: </td><td>'+a+'</td></tr>'; 
    });
}

