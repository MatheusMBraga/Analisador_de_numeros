var numero = document.querySelector('#numero');
var caixa_num = document.querySelector('#salnum');
var res = document.querySelector('#res');
var valores = []; 

function adicionar() { 
    let num = Number(numero.value);
    // Verificação de número
    if (num.length === 0 || num <= 0 || num > 100) {
        alert("Número inválido! Favor inserir números entre 1 e 100, apenas.");
         numero.value = ''
         numero.focus()
    } else {
        // Verifica se o número já está no array
        if (valores.includes(num)) {
            alert('Valor já inserido!');
            numero.value = ''
            numero.focus()
        } else {
            valores.push(num); // Adiciona o número ao array
            let item = document.createElement('option');
            item.text = `Número ${num} adicionado`;
            item.value = num; // Adiciona o valor ao option
            caixa_num.appendChild(item);
            numero.value = ''
            numero.focus()
        }
    } 
}

function calcular() {
    if ( valores.length == 0) {
        alert('Favor inserir ao menos um número!')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma+=valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }  
}

function excluir() {
    // Selecionando item em 'caixa_num'
    let seleciona = caixa_num.selectedIndex;
    if (seleciona !== -1) {
        //valor do item selecionado
        let valor = Number(caixa_num.options[seleciona].value);
        // Removendo do array
        valores = valores.filter(num => num !== valor);
        // Removendo do select
        caixa_num.remove(seleciona);
    } else {
        alert("Por favor, selecione um item para excluir.");
    }
}

function exibirValores() {
    //let lista = document.querySelector('.array')
    //lista.innerHTML = "Valores na lista: " + caixa_numeros.join(', ')
    console.log(valores);
    alert("Valores na lista: " + valores);
}

function limpar(){
    res.innerHTML = ''
    valores = ['']
    caixa_num.innerHTML = ''
    numero.value = ''
    numero.focus()
}
