x = -4
y = 4

while True:
    for i in range(5):
        led.plot(x, y)
        x += 1
        y -= 1
    x -= 5
    x += 1
    y = 4  
    basic.pause(300)
    basic.clear_screen()  
