import fetch from 'node-fetch'

export default function handler(request, response){

    fetch('https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app/pins.json')
    .then(jsonstring => response.json(jsonstring))
}