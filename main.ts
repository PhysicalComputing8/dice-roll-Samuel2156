input.onGesture(Gesture.Shake, function () {
    // A variable is a place where your program can store a value. We need a place to store the result of the roll, so I created a variable called roll.
    //  I have the program generate a random number between 1 and 6, and I assign that value to the roll variable
    roll = randint(1, 6)
    // Why is this code grayed out?  It isn't connected to anything that will trigger it to execute. In order to execute, a block has to be inside of an event such as "on start" or "on Shake" or "forever".
    basic.showNumber(roll)
})
// Code added here will run once when the program starts
let roll = 0
basic.showString("Shake to roll the dice")
