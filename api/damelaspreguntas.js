export default function handler(request, response){
    const preguntas = {
        "pregunta1" : {
            "pregunta" : "2+2?", "res1" : "2", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "1"
        },
        "pregunta2" : {
            "pregunta" : "18+2?", "res1" : "2", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "2"
        },
        "pregunta3" : {
            "pregunta" : "3+2?", "res1" : "2", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "3"
        }
    }
    response.json(preguntas)
}