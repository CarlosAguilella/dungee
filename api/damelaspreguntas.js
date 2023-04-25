export default function handler(request, response){
    const preguntas = [
        {"pregunta" : ["cuanto es 2+2?","6","8","2","4",4]},
        {"pregunta" : ["cuanto es 3+3?","6","8","2","5",1]},
        {"pregunta" : ["cuanto es 4+4?","6","8","2","5",2]}
    ]



    response.json(preguntas)
}