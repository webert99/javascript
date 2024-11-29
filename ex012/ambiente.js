let num = [4, 9, 6, 8, 7]
num.push(1)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)

if ( pos == -1) {
    console.log('O valor não foi encotrado')
}else {
    console.log(`o valor 9 se encontra na posição ${pos}`)
}