controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
    bullet.x = Cannon.x
    bullet.y = Cannon.y - 4
    bullet.vy = -30
    music.rest(music.beat(BeatFraction.Whole))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
let bullet: Sprite = null
let Crab9: Sprite = null
let Crab8: Sprite = null
let Crab7: Sprite = null
let Crab6: Sprite = null
let Crab5: Sprite = null
let Crab4: Sprite = null
let Crab3: Sprite = null
let Crab2: Sprite = null
let Crab1: Sprite = null
let Squid9: Sprite = null
let Squid8: Sprite = null
let Squid7: Sprite = null
let Squid6: Sprite = null
let Squid5: Sprite = null
let Squid4: Sprite = null
let Squid3: Sprite = null
let Squid2: Sprite = null
let Squid1: Sprite = null
let Cannon: Sprite = null
scene.setBackgroundImage(assets.image`background`)
for (let index = 0; index < 1; index++) {
    Cannon = sprites.create(assets.image`Cannon`, SpriteKind.Player)
    Cannon.setPosition(80, 116)
    Cannon.setStayInScreen(true)
}
for (let index = 0; index < 1; index++) {
    Squid1 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid1.setPosition(20, 20)
    Squid2 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid2.setPosition(35, 20)
    Squid3 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid3.setPosition(50, 20)
    Squid4 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid4.setPosition(65, 20)
    Squid5 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid5.setPosition(80, 20)
    Squid6 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid6.setPosition(95, 20)
    Squid7 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid7.setPosition(110, 20)
    Squid8 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid8.setPosition(125, 20)
    Squid9 = sprites.create(assets.image`Squid`, SpriteKind.Enemy)
    Squid9.setPosition(140, 20)
}
for (let index = 0; index < 1; index++) {
    Crab1 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab1.setPosition(20, 35)
    Crab2 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab2.setPosition(35, 35)
    Crab3 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab3.setPosition(50, 35)
    Crab4 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab4.setPosition(65, 35)
    Crab5 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab5.setPosition(80, 35)
    Crab6 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab6.setPosition(95, 35)
    Crab7 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab7.setPosition(110, 35)
    Crab8 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab8.setPosition(125, 35)
    Crab9 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
    Crab9.setPosition(140, 35)
}
Crab1 = sprites.create(assets.image`Crab`, SpriteKind.Enemy)
let Octopus = sprites.create(assets.image`Octopus`, SpriteKind.Enemy)
forever(function () {
    controller.moveSprite(Cannon, 150, 0)
})
