export default function handler(request, response){
    const preguntas = [
        {"pregunta" : ["cuanto es 2+2?","2",false,"3",false,"4",true,"5",false]},
        {"pregunta" : ["cuanto es 3+3?","2",false,"3",false,"6",true,"5",false]},
        {"pregunta" : ["cuanto es 4+4?","2",false,"3",false,"8",true,"5",false]}
    ]



    response.json(preguntas)
}