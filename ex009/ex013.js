var agora = new Date()
var hora = agora.getHours
if (hora < 5){
console.log("boa madrugada")
}else if(hora < 12 ){
console.log("bom dia")
}else if(hora == 12){
console.log("bom meio dia")
}else if(hora < 18){
console.log("boa tarde")
}else{
    console.log("boa noite")
}