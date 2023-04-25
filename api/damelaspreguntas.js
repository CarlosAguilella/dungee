export default function handler(request, response){
    const preguntas = {
        "pregunta" : "cuanto es 2+2?"
        "pregunta" : "cuanto es 3+2?"
        "pregunta" : "cuanto es 4+2?"
        "pregunta" : "cuanto es 5+2?"
        "pregunta" : "cuanto es 6+2?"
        "pregunta" : "cuanto es 7+2?"


    }
    response.json(preguntas)
}