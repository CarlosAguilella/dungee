export default function handler(request, response){

    fetch('https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app')
    .then(jsonstring => response.send(jsonstring))
}