let prompt = require('prompt-sync')({sigint: true})



let intention = prompt('Combine or deconstruct? ')

if (intention === 'combine') {
    let color1 = prompt('What is your first color ? ')
    let color2 = prompt('What is your second color? ')
    if (color1 === 'red' && color2 === 'blue') {
        console.log('Your combination made Purple')
    } else if (color1 === 'red' && color2 === 'yellow') {
        console.log('Your combination made Orange')
    } else if (color1 === 'blue' && color2 === 'yellow') {
        console.log('Your combination made Green')
    } else {
        console.log('Error')
    }
} 

if (intention === 'deconstruct') {
    let color = prompt('Pick a color to deconstruct! ')
    if (color === 'purple') {
        console.log('red and blue')
    } else if (color === 'orange') {
        console.log('red and yellow')
    } else if (color === 'green') {
        console.log('blue and yellow')
    } else {
        console.log('Error')
    }
}