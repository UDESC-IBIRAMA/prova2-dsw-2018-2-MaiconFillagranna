function onClickConsultar() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = '';
    const busca = document.getElementById("veiculo").value;
    const JSON_PATH = 'https://swapi.co/api/vehicles/?search='+busca;
    fetch(JSON_PATH).then(seila).then(trataResultados);
    
    function seila(response) {
        return response.json();
    }
    
    function trataResultados(json) {
        let tabela = document.getElementById("tabela");
        json.results.forEach(function(a) {
            tabela.innerHTML += '<tr><td>name: </td><td>'+a.name+'</td></tr>'; 
            tabela.innerHTML += '<tr><td>model: </td><td>'+a.model+'</td></tr>'; 
            tabela.innerHTML += '<tr><td>manufacturer: </td><td>'+a.manufacturer+'</td></tr>'; 
            tabela.innerHTML += '<tr><td>cargo_capacity: </td><td>'+a.cargo_capacity+'</td></tr>'; 
        });
    }
}


