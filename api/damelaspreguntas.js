export default function handler(request, response){
    const preguntas = {
        "pregunta" : "cuanto es 2+2?"

    }
    response.json(preguntas)
}