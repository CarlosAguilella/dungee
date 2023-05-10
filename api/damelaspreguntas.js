export default function handler(request, response){
    const questions = {
        "preguntas" :{    
            "pregunta0" : {
                "pregunta" : "2+2?", "res1" : "4", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "1"
            },
            "pregunta1" : {
                "pregunta" : "18+2?", "res1" : "2", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "2"
            },
            "pregunta2" : {
                "pregunta" : "3+2?", "res1" : "2", "res2" : "20", "res3" : "5", "res4" : "3", "correcta" : "3"
            },
            "pregunta3" : {
                "pregunta" : "Capital de ESPAÑA?", "res1" : "Madrid", "res2" : "Manchester", "res3" : "Paris", "res4" : "Valencia", "correcta" : "1"
            },
            "pregunta4" : {
                "pregunta" : "Capital de FRANCIA?", "res1" : "Madrid", "res2" : "Manchester", "res3" : "Paris", "res4" : "Valencia", "correcta" : "3"
            },
            "pregunta5" : {
                "pregunta" : "Capital de ITALIA?", "res1" : "Madrid", "res2" : "Roma", "res3" : "Paris", "res4" : "Valencia", "correcta" : "2"
            }
        }
    }
    response.json(questions)
}