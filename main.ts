input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    // This is cool. So you will show the Arabic numeral before displaying the dots. Was this on purpose?
    basic.showNumber(roll)
    // Not a bad approach, but it is generally better to do something like this as a single if/then/else block and to handle each condition in order. It works fine this way because you are evaluating whether a value EQUALS something. It would be harder to do it this way if you were checking something like LESS THAN or GREATER THAN.
    if (roll == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . # .
            . # . . .
            . . . . .
            `)
    }
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (roll == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    }
    if (roll == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (roll == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (roll == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
let roll = 0
basic.showString("Shake")
