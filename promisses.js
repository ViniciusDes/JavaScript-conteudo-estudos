var minhaPromisse  = function(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');

        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 ){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject('erro na requisição');
                }
            }
        }



    })
}
 

minhaPromisse()
            .then(function(response){//a response seria a resposta da requisição basicamente o resultado, pois se houver erro
                console.log(response)//o metodo catch trata e lida como erro
            })
            .catch(function(error){
                console.warn(error)
            })