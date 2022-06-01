input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
function addDodgeball () {
    dodgeBall = game.createSprite(randint(0, 4), 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        dodgeBall.change(LedSpriteProperty.Y, -1)
    }
    basic.pause(10)
    if (sprite.isTouching(dodgeBall)) {
        sprite.delete()
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        control.reset()
    } else {
        dodgeBall.delete()
    }
}
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let dodgeBall: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 0)
loops.everyInterval(1500, function () {
    addDodgeball()
})
