function consultaCep() {
    let cep = document.getElementById('cep').value;

    console.log(cep);
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function (response) {
            document.getElementById('localidade').textContent = response.localidade;
            document.getElementById('dd').innerHTML = response.ddd;
            $('#uf').html(response.uf);
           
            console.log(response);
        }
    })
}