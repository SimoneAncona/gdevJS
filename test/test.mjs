import { Entity, Game } from "../index.mjs"

const game = new Game("title", 400, 400);
const player = new Entity();
player.addTexture("mario", "assets/mario.png");
player.setTexture("mario");
player.setGravity(10);
player.addEventListener("onKeyDown", (key) => {
    if (key === "Right")
        player.moveX(10);
    if (key === "Left")
        player.moveX(-10);
})
game.addEntity("mario", player);
game.start();