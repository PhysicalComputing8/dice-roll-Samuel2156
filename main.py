def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Player_A = 0
    if Player_A:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global roll
    roll = randint(1, 6)
    # This is cool. So you will show the Arabic numeral before displaying the dots. Was this on purpose?
    basic.show_number(roll)
    # Not a bad approach, but it is generally better to do something like this as a single if/then/else block and to handle each condition in order. It works fine this way because you are evaluating whether a value EQUALS something. It would be harder to do it this way if you were checking something like LESS THAN or GREATER THAN.
    if roll == 3:
        basic.show_leds("""
            . . . . .
            . # . . .
            . . . # .
            . # . . .
            . . . . .
            """)
    if roll == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    if roll == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            """)
    if roll == 4:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
    if roll == 5:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """)
    if roll == 6:
        basic.show_leds("""
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_received_value(name, value):
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    led.set_brightness(255)
    radio.set_transmit_power(7)
    music.ring_tone(262)
radio.on_received_value(on_received_value)

roll = 0
basic.show_string("Shake")