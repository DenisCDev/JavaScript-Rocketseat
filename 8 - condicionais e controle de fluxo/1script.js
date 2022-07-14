// control flow

// if...else

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
}else {
    console.log('Saudável')
}