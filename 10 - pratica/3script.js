// Transformando celsius em fahrenheit e vice versa

let temperatura = 0
let fahrenheit

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não indentificado')
    }

    // fluxo ideal
    let updatedDegree = degree.toUpperCase().replace("F", "");
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    let degreeSign = 'F'
    }

    try {
        transformDegree('50F')
    } catch (error) {
        console.log(error)
    }
}