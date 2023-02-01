let prompt = require('prompt-sync')({sigint: true})



// let intention = prompt('Combine or deconstruct? ')

let input = prompt('Add single color or color pair: ')

// if (intention === 'combine') {
//     let color1 = prompt('What is your first color ? ')
//     let color2 = prompt('What is your second color? ')
//     if (color1 === 'red' && color2 === 'blue') {
//         console.log('Your combination made Purple')
//     } else if (color1 === 'red' && color2 === 'yellow') {
//         console.log('Your combination made Orange')
//     } else if (color1 === 'blue' && color2 === 'yellow') {
//         console.log('Your combination made Green')
//     } else {
//         console.log('Error')
//     }
// } 

// if (intention === 'deconstruct') {
//     let color = prompt('Pick a color to deconstruct! ')
//     if (color === 'purple') {
//         console.log('red and blue')
//     } else if (color === 'orange') {
//         console.log('red and yellow')
//     } else if (color === 'green') {
//         console.log('blue and yellow')
//     } else {
//         console.log('Error')
//     }
// }

// red & blue = purple
// red & yello = orange
// blue & yellow = green


//
// STRETCH GOAL
//

if (input.includes('red') && input.includes('blue')) {
    console.log('purple')
} else if (input.includes('red') && input.includes('yellow')) {
    console.log('orange')
} else if (input.includes('blue') && input.includes('yellow')) {
    console.log('green')
} else if (input.includes('purple')) {
    console.log('red & blue')
} else if (input.includes('orange')) {
    console.log('red & yellow')
} else if (input.includes('green')) {
    console.log('blue & yellow')
} else {
    console.log('error')
}