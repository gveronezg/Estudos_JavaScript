/*  Fazer um programa que execute três métodos de ordenação: bubblesort, seleção direta e inserção direta.
    Os testes devem ser realizados em 3 diferentes vetores de 1000 elementos de números inteiros: aleatório, 
    ordenado e invertido. Verificar o tempo de execução de cada caso e analisar os resultados obtidos.  */
function trabalho1(){
    // Vetores de 100 elementos
    var vetorordenado = []
    var vetorordenado1 = []
    var vetorordenado2 = []
    var vetorordenado3 = []
    var vetorordenado4 = []
    var vetorinvertido = []
    var vetorinvertido1 = []
    var vetorinvertido2 = []
    var vetorinvertido3 = []
    var vetorinvertido4 = []
    var vetoraleatorio = []
    var vetoraleatorio1 = []
    var vetoraleatorio2 = []
    var vetoraleatorio3 = []
    var vetoraleatorio4 = []
    for (let i = 0; i < 100; i++){
        vetorordenado.push(i)
        vetorordenado1.push(i)
        vetorordenado2.push(i)
        vetorordenado3.push(i)
        vetorordenado4.push(i)
    }
    for (let i = 100; i > 0; i--){
        vetorinvertido.push(i)
        vetorinvertido1.push(i)
        vetorinvertido2.push(i)
        vetorinvertido3.push(i)
        vetorinvertido4.push(i)
    }
    for (let i = 0; i < 100; i++){
        vetoraleatorio.push(getrandom(100))
        vetoraleatorio1.push(getrandom(100))
        vetoraleatorio2.push(getrandom(100))
        vetoraleatorio3.push(getrandom(100))
        vetoraleatorio4.push(getrandom(100))
    }
    // Vetores de 1.000 elementos
    var vetorordenado0 = []
    var vetorordenado10 = []
    var vetorordenado20 = []
    var vetorordenado30 = []
    var vetorordenado40 = []
    var vetorinvertido0 = []
    var vetorinvertido10 = []
    var vetorinvertido20 = []
    var vetorinvertido30 = []
    var vetorinvertido40 = []
    var vetoraleatorio0 = []
    var vetoraleatorio10 = []
    var vetoraleatorio20 = []
    var vetoraleatorio30 = []
    var vetoraleatorio40 = []
    for (let i = 0; i < 1000; i++){
        vetorordenado0.push(i)
        vetorordenado10.push(i)
        vetorordenado20.push(i)
        vetorordenado30.push(i)
        vetorordenado40.push(i)
    }
    for (let i = 1000; i > 0; i--){
        vetorinvertido0.push(i)
        vetorinvertido10.push(i)
        vetorinvertido20.push(i)
        vetorinvertido30.push(i)
        vetorinvertido40.push(i)
    }
    for (let i = 0; i < 1000; i++){
        vetoraleatorio0.push(getrandom(1000))
        vetoraleatorio10.push(getrandom(1000))
        vetoraleatorio20.push(getrandom(1000))
        vetoraleatorio30.push(getrandom(1000))
        vetoraleatorio40.push(getrandom(1000))
    }
    // Vetores de 10.000 elementos
    var vetorordenado00 = []
    var vetorordenado100 = []
    var vetorordenado200 = []
    var vetorordenado300 = []
    var vetorordenado400 = []
    var vetorinvertido00 = []
    var vetorinvertido100 = []
    var vetorinvertido200 = []
    var vetorinvertido300 = []
    var vetorinvertido400 = []
    var vetoraleatorio00 = []
    var vetoraleatorio100 = []
    var vetoraleatorio200 = []
    var vetoraleatorio300 = []
    var vetoraleatorio400 = []
    for (let i = 0; i < 10000; i++){
        vetorordenado00.push(i)
        vetorordenado100.push(i)
        vetorordenado200.push(i)
        vetorordenado300.push(i)
        vetorordenado400.push(i)
    }
    for (let i = 10000; i > 0; i--){
        vetorinvertido00.push(i)
        vetorinvertido100.push(i)
        vetorinvertido200.push(i)
        vetorinvertido300.push(i)
        vetorinvertido400.push(i)
    }
    for (let i = 0; i < 10000; i++){
        vetoraleatorio00.push(getrandom(10000))
        vetoraleatorio100.push(getrandom(10000))
        vetoraleatorio200.push(getrandom(10000))
        vetoraleatorio300.push(getrandom(10000))
        vetoraleatorio400.push(getrandom(10000))
    }
    // Vetores de 100.000 elementos
    var vetorordenado000 = []
    var vetorordenado1000 = []
    var vetorordenado2000 = []
    var vetorordenado3000 = []
    var vetorordenado4000 = []
    var vetorinvertido000 = []
    var vetorinvertido1000 = []
    var vetorinvertido2000 = []
    var vetorinvertido3000 = []
    var vetorinvertido4000 = []
    var vetoraleatorio000 = []
    var vetoraleatorio1000 = []
    var vetoraleatorio2000 = []
    var vetoraleatorio3000 = []
    var vetoraleatorio4000 = []
    for (let i = 0; i < 100000; i++){
        vetorordenado000.push(i)
        vetorordenado1000.push(i)
        vetorordenado2000.push(i)
        vetorordenado3000.push(i)
        vetorordenado4000.push(i)
    }
    for (let i = 100000; i > 0; i--){
        vetorinvertido000.push(i)
        vetorinvertido1000.push(i)
        vetorinvertido2000.push(i)
        vetorinvertido3000.push(i)
        vetorinvertido4000.push(i)
    }
    for (let i = 0; i < 100000; i++){
        vetoraleatorio000.push(getrandom(100000))
        vetoraleatorio1000.push(getrandom(100000))
        vetoraleatorio2000.push(getrandom(100000))
        vetoraleatorio3000.push(getrandom(100000))
        vetoraleatorio4000.push(getrandom(100000))
    }
                                                                // 100 elementos
console.log(vetorordenado)
console.log(vetorinvertido)
console.log(vetoraleatorio)
    // tempo bubllesort total
console.time('tempo do bubllesort total')
    // tempo bubllesort ordenado
console.time('bubllesort ordenado')
bubblesort(vetorordenado1)
console.timeEnd('bubllesort ordenado')
    // tempo bubllesort invertido
console.time('bubllesort invertido ')
bubblesort(vetorinvertido1)
console.timeEnd('bubllesort invertido ')
    // tempo bubllesort aleatório
console.time('bubllesort aleatorio')
bubblesort(vetoraleatorio1)
console.timeEnd('bubllesort aleatorio')
console.timeEnd('tempo do bubllesort total')
    //tempo selecao direta total
console.time('tempo do selecao direta total')
    // tempo seleção direta ordenado
console.time('selecao direta ordenado')
selecaodireta(vetorordenado2)
console.timeEnd('selecao direta ordenado')
    // tempo seleção direta invertido
console.time('selecao direta invertido ')
selecaodireta(vetorinvertido2)
console.timeEnd('selecao direta invertido ')
    // tempo seleção direta aleatório
console.time('selecao direta aleatorio')
selecaodireta(vetoraleatorio2)
console.timeEnd('selecao direta aleatorio') 
console.timeEnd('tempo do selecao direta total')
    // tempo insercao direta total
console.time('tempo do insercao direta total')
    // tempo insercao direta ordenado
console.time('insercao direta ordenado')
insercaodireta(vetorordenado3)
console.timeEnd('insercao direta ordenado')
    // tempo insercao direta invertido
console.time('insercao direta invertido ')
insercaodireta(vetorinvertido3)
console.timeEnd('insercao direta invertido ')
    // tempo insercao direta aleatório
console.time('insercao direta aleatorio')
selecaodireta(vetoraleatorio3)
console.timeEnd('insercao direta aleatorio') 
console.timeEnd('tempo do insercao direta total')
    // tempo quicksort total
console.time('tempo do quicksort total')
    // tempo quicksort ordenado
console.time('quicksort ordenado')
insercaodireta(vetorordenado4)
console.timeEnd('quicksort ordenado')
    // tempo quicksort invertido
console.time('quicksort invertido ')
insercaodireta(vetorinvertido4)
console.timeEnd('quicksort invertido ')
    // tempo quicksort aleatório
console.time('quicksort aleatorio')
selecaodireta(vetoraleatorio4)
console.timeEnd('quicksort aleatorio') 
console.timeEnd('tempo do quicksort total')
                                                                // 1000 elementos
console.log(vetorordenado0)
console.log(vetorinvertido0)
console.log(vetoraleatorio0)
    // tempo bubllesort total
console.time('tempo do bubllesort total')
    // tempo bubllesort ordenado
console.time('bubllesort ordenado')
bubblesort(vetorordenado10)
console.timeEnd('bubllesort ordenado')
    // tempo bubllesort invertido
console.time('bubllesort invertido ')
bubblesort(vetorinvertido10)
console.timeEnd('bubllesort invertido ')
    // tempo bubllesort aleatório
console.time('bubllesort aleatorio')
bubblesort(vetoraleatorio10)
console.timeEnd('bubllesort aleatorio')
console.timeEnd('tempo do bubllesort total')
    //tempo selecao direta total
console.time('tempo do selecao direta total')
    // tempo seleção direta ordenado
console.time('selecao direta ordenado')
selecaodireta(vetorordenado20)
console.timeEnd('selecao direta ordenado')
    // tempo seleção direta invertido
console.time('selecao direta invertido ')
selecaodireta(vetorinvertido20)
console.timeEnd('selecao direta invertido ')
    // tempo seleção direta aleatório
console.time('selecao direta aleatorio')
selecaodireta(vetoraleatorio20)
console.timeEnd('selecao direta aleatorio') 
console.timeEnd('tempo do selecao direta total')
    // tempo insercao direta total
console.time('tempo do insercao direta total')
    // tempo insercao direta ordenado
console.time('insercao direta ordenado')
insercaodireta(vetorordenado30)
console.timeEnd('insercao direta ordenado')
    // tempo insercao direta invertido
console.time('insercao direta invertido ')
insercaodireta(vetorinvertido30)
console.timeEnd('insercao direta invertido ')
    // tempo insercao direta aleatório
console.time('insercao direta aleatorio')
selecaodireta(vetoraleatorio30)
console.timeEnd('insercao direta aleatorio') 
console.timeEnd('tempo do insercao direta total')
    // tempo quicksort total
console.time('tempo do quicksort total')
    // tempo quicksort ordenado
console.time('quicksort ordenado')
insercaodireta(vetorordenado40)
console.timeEnd('quicksort ordenado')
    // tempo quicksort invertido
console.time('quicksort invertido ')
insercaodireta(vetorinvertido40)
console.timeEnd('quicksort invertido ')
    // tempo quicksort aleatório
console.time('quicksort aleatorio')
selecaodireta(vetoraleatorio40)
console.timeEnd('quicksort aleatorio') 
console.timeEnd('tempo do quicksort total')
                                                                // 10000 elementos
console.log(vetorordenado00)
console.log(vetorinvertido00)
console.log(vetoraleatorio00)
    // tempo bubllesort total
console.time('tempo do bubllesort total')
    // tempo bubllesort ordenado
console.time('bubllesort ordenado')
bubblesort(vetorordenado100)
console.timeEnd('bubllesort ordenado')
    // tempo bubllesort invertido
console.time('bubllesort invertido ')
bubblesort(vetorinvertido100)
console.timeEnd('bubllesort invertido ')
    // tempo bubllesort aleatório
console.time('bubllesort aleatorio')
bubblesort(vetoraleatorio100)
console.timeEnd('bubllesort aleatorio')
console.timeEnd('tempo do bubllesort total')
    //tempo selecao direta total
console.time('tempo do selecao direta total')
    // tempo seleção direta ordenado
console.time('selecao direta ordenado')
selecaodireta(vetorordenado200)
console.timeEnd('selecao direta ordenado')
    // tempo seleção direta invertido
console.time('selecao direta invertido ')
selecaodireta(vetorinvertido200)
console.timeEnd('selecao direta invertido ')
    // tempo seleção direta aleatório
console.time('selecao direta aleatorio')
selecaodireta(vetoraleatorio200)
console.timeEnd('selecao direta aleatorio') 
console.timeEnd('tempo do selecao direta total')
    // tempo insercao direta total
console.time('tempo do insercao direta total')
    // tempo insercao direta ordenado
console.time('insercao direta ordenado')
insercaodireta(vetorordenado300)
console.timeEnd('insercao direta ordenado')
    // tempo insercao direta invertido
console.time('insercao direta invertido ')
insercaodireta(vetorinvertido300)
console.timeEnd('insercao direta invertido ')
    // tempo insercao direta aleatório
console.time('insercao direta aleatorio')
selecaodireta(vetoraleatorio300)
console.timeEnd('insercao direta aleatorio') 
console.timeEnd('tempo do insercao direta total')
    // tempo quicksort total
console.time('tempo do quicksort total')
    // tempo quicksort ordenado
console.time('quicksort ordenado')
insercaodireta(vetorordenado400)
console.timeEnd('quicksort ordenado')
    // tempo quicksort invertido
console.time('quicksort invertido ')
insercaodireta(vetorinvertido400)
console.timeEnd('quicksort invertido ')
    // tempo quicksort aleatório
console.time('quicksort aleatorio')
selecaodireta(vetoraleatorio400)
console.timeEnd('quicksort aleatorio') 
console.timeEnd('tempo do quicksort total')
                                                                // 100000 elementos
console.log(vetorordenado000)
console.log(vetorinvertido000)
console.log(vetoraleatorio000)
    // tempo bubllesort total
console.time('tempo do bubllesort total')
    // tempo bubllesort ordenado
console.time('bubllesort ordenado')
bubblesort(vetorordenado1000)
console.timeEnd('bubllesort ordenado')
    // tempo bubllesort invertido
console.time('bubllesort invertido ')
bubblesort(vetorinvertido1000)
console.timeEnd('bubllesort invertido ')
    // tempo bubllesort aleatório
console.time('bubllesort aleatorio')
bubblesort(vetoraleatorio1000)
console.timeEnd('bubllesort aleatorio')
console.timeEnd('tempo do bubllesort total')
    //tempo selecao direta total
console.time('tempo do selecao direta total')
    // tempo seleção direta ordenado
console.time('selecao direta ordenado')
selecaodireta(vetorordenado2000)
console.timeEnd('selecao direta ordenado')
    // tempo seleção direta invertido
console.time('selecao direta invertido ')
selecaodireta(vetorinvertido2000)
console.timeEnd('selecao direta invertido ')
    // tempo seleção direta aleatório
console.time('selecao direta aleatorio')
selecaodireta(vetoraleatorio2000)
console.timeEnd('selecao direta aleatorio') 
console.timeEnd('tempo do selecao direta total')
    // tempo insercao direta total
console.time('tempo do insercao direta total')
    // tempo insercao direta ordenado
console.time('insercao direta ordenado')
insercaodireta(vetorordenado3000)
console.timeEnd('insercao direta ordenado')
    // tempo insercao direta invertido
console.time('insercao direta invertido ')
insercaodireta(vetorinvertido3000)
console.timeEnd('insercao direta invertido ')
    // tempo insercao direta aleatório
console.time('insercao direta aleatorio')
selecaodireta(vetoraleatorio3000)
console.timeEnd('insercao direta aleatorio') 
console.timeEnd('tempo do insercao direta total')
    // tempo quicksort total
console.time('tempo do quicksort total')
    // tempo quicksort ordenado
console.time('quicksort ordenado')
insercaodireta(vetorordenado400)
console.timeEnd('quicksort ordenado')
    // tempo quicksort invertido
console.time('quicksort invertido ')
insercaodireta(vetorinvertido400)
console.timeEnd('quicksort invertido ')
    // tempo quicksort aleatório
console.time('quicksort aleatorio')
selecaodireta(vetoraleatorio400)
console.timeEnd('quicksort aleatorio') 
console.timeEnd('tempo do quicksort total')
}
function getrandom(n) {
    return Math.floor(Math.random() * n)
}
function bubblesort(vetor){
    for(let i=0; i < vetor.length-1; i++){
        var aux
        for(let j=0; j < vetor.length-i-1; j++){
            if(vetor[j]> vetor[j+1]){
                aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j+1] = aux
            }
        }
    }
}
function insercaodireta(vetor){
    for(var i =1; i< vetor.length ;i++){

        for(var j= 0; j < i ;j++){
            if(vetor[i] < vetor[j]){
                var aux = vetor[i]
                for(var k = i; k > j; k--){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux
            }
        }
    }
}
function selecaodireta(vetor){
    for(var i =0; i< vetor.length ;i++){
        var menor = vetor[i]
        var pos = i
        for(var j= i+1; j< vetor.length ;j++){
            if(vetor[j] < menor){
                menor = vetor[j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}
function quicksort(array){
    var i = left
    var j = right
    var aux
    var pivotidx = (left+ right)/2
    var pivot = parseInt(array[pivotidx.toFixed()])
    //Participação
    while(i <= j ){
        while(parseInt(array[i]) < pivot)
            i++
        while(parseInt(array[j]) > pivot)
            j--
        if(i <= j){
            aux = array[i]
            array[i] =array[j]
            array[j] = aux
            i++
            j--
        }
    }
    //recursão
    if(left < j){
        quicksort(array,left,j)
    }
    if(i < right){
        quicksort(array,i,right)
    }
    console.log(vetor)
}
