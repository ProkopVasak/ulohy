let x = -4
let y = 4
while (true) {
    for (let i = 0; i < 5; i++) {
        led.plot(x, y)
        x += 1
        y -= 1
    }
    x -= 5
    x += 1
    y = 4
    basic.pause(300)
    basic.clearScreen()
}
