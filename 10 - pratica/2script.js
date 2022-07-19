/* sistema de gastos de oportunidade 
    Criar um objeto que possui 2  propriedades, ambas do tipo array:
    *despesas[]
    *receitas[]
    Após isso faça uma função que irá calcular o total de receitas e despesas, mostrando se o saldo está positivo ou negativo
*/

let family = {
    incomes: [1300, 600, 500],
    expenses: [1100, 213.39, 121.12,]
}

function sum(array) {
    let total = 0;

    for(let value of array)
        total += value

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
}

const total = calculateIncomes - calculateExpenses

const itsOk = total >= 0

let balanceText = "negativo"

if (itsOk) {
    balanceText = "positivo"
}

console.log(`Seu saldo é ${balanceText}: ${total}`)