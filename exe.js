// function checaIdade(idade) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             return idade >= 18 ? resolve() : reject();
//           }, 2000);
//     })
//  }

// checaIdade(12)
//     .then(function() {
//     console.log("Maior que 18");
//     })

//     .catch(function() {
//     console.log("Menor que 18");
//     });


var buttonElement = document.querySelector('#btnAdc');
var ulElement = document.querySelector('#lista');

var a = ['a', 'c', 'd']
buttonElement.onclick = function(){
    var inputElement = document.querySelector('#inpt');
    var usuario = inputElement.value;
  


    var link ='https://api.github.com/users/'+usuario+'/repos';
    console.log(link);

    axios.get(link)
    .then(function(response) {
        
       renderRepositories(response.data);
      
    })
    .catch(function(){
        renderError();
    }); 
}
    
function renderRepositories(repositories){
    ulElement.innerHTML = "";
    

    for (repo of repositories) {
      const textElement = document.createTextNode(repo.name);
      const li = document.createElement('li');

      li.appendChild(textElement);
      ulElement.appendChild(li);
      

    }

}

function renderLoading(loading) {
    ulElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    ulElement.appendChild(loadingElement);
  }

function renderError(loading) {
    ulElement.innerHTML = "";

    var textElement = document.createTextNode('Erro usuario nao encontrado!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    ulElement.appendChild(errorElement);
  }