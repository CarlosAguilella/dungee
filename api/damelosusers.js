export default function handler(request, response){
    fetch(`https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}.json`)
    .then(datos => datos.json())
    .then(json => response.json(json))
}