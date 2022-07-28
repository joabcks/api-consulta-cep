const cep = document.getElementById("cep");

cep.addEventListener("blur", (e) => {
  //caso cep tenha " - ", o replace retira e deixa espaço vazio
  let search = cep.value.replace("-", "");

  fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
    response.json().then(data => {
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("ddd").value = data.ddd;
      document.getElementById("localidade").value = data.localidade;
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("uf").value = data.uf;


    })
  })
})

//pegando os dados do imput e criando um JSON
function enviar() {
  let nome = document.getElementById("nome").value;
  let bairro = document.getElementById("bairro").value;
  let ddd = document.getElementById("ddd").value;
  let localidade = document.getElementById("localidade").value;
  let logradouro = document.getElementById("logradouro").value;
  let uf = document.getElementById("uf").value;

  let json = {
    "nome": nome,
    "bairro": bairro,
    "ddd": ddd,
    "localidade": localidade,
    "logradouro": logradouro,
    "uf": uf


  }

console.log(json);


}
