let valores = [8, 7 ,3 , 1 , 5 ,9]

// console.log(valores)

/*
consle.log(valores[0])
consle.log(valores[1])
consle.log(valores[2])
consle.log(valores[3])
consle.log(valores[4])
consle.log(valores[5])



for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    */



for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 