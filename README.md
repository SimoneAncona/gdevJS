# GdevJS
## Introduction
This library allows you to create simple 2D games.

## Installation
You can install this library using `npm i gdevjs`.  
This library require `SDL2` in order to run. Simple DirectMedia Layer is a cross-platform library designed to provide low level access to different resources such as video. SDL2 is available for windows, linux and macos as well.

### For Linux
To use Simply2D you must have installed SDL2. To install it you can use the following command:
- For Ubuntu: `sudo apt install libsdl2-2.0-0 libsdl2-image-2.0-0 libsdl2-ttf-2.0-0`
- For Red Hat and Fedora: `sudo dnf install SDL2 SDL2_image SDL2_ttf`.

## API

### Game
The `Game` class is a subclass of the `Canvas` class of the `simply2d` package. Only the methods additional to the Canvas class are listed below, for the methods of the Canvas class [click here](https://github.com/SimoneAncona/simply2d#canvas).

### Game.addEntity
```ts
addEntity(entityID: string, entity: Entity): void
```
Add a new entity to the game. The `entityID` must be unique and is used to identify an entity in the game.

### Game.removeEntity
```ts
removeEntity(entityID: string): void
```
Removes the entity with that ID.

### Entity
The `Entity` class is used to create entities which can be players, NPCs, walls or UI elements.
```ts
const player = new Entity();
player.addTexture("mario", "assets/mario.png");
player.setTexture("mario");
player.setGravity(1);
```
An entity can be of several types:
- texture entity (default): the entity is rendered with a texture
- text entity: the entity is rendered with a text

### Entity.addTexture
```ts
addTexture(textureID: string, filePath: string): void
```
Add a texture to the entity. An entity can have different textures in the texture buffer.

### Entity.setTexture
```ts
setTexture(textureID: string): void
```
Change the current texture to another texture.

### Entity.getCurrentTexture
```ts
getCurrentTexture(): string
```
Get the current texture ID.

### Entity.getCurrentTexturePath
```ts
getCurrentTexturePath(): string
```
Get the current texture file path.

### Entity.getType
```ts
getType(): EntityType 
```
Get the entity type.

### Entity.addEventListener
```ts
addEventListener(event: GameEvent, callback: Function): void
```
Add an event listener. The `GameEvent` type can be an `onClick` string, `onKeyDown` string or `onKeyUp` string.

### Entity.onClick
```ts
onClick(callback: (x: number, y: number) => void): void
```
On click event.

### Event.getEventListener
```ts
getEventListener(): { event: GameEvent, callback: Function }[]
```
Get events list.

### Entity.setX
```ts
setX(x: number): void
```
Set X position.

### Entity.setY
```ts
setY(y: number): void
```
Set Y position.

### Entity.getProperties
```ts
getProperties(): EntityProperties
```
Get the entity physics properties.

### Entity.getTextures
```ts
getTextures(): { textureID: string, file: string }[] 
```
Get the texture buffer.

### Entity.moveX
```ts
moveX(x: number): void
```
Move the entity on the X axis.

### Entity.moveY
```ts
moveY(y: number): void
```
Move the entity on the Y axis.

### Entity.setGravity
```ts
setGravity(gravity: number): void
```
Set the gravity property.

### Entity.setCollideOnEdges
```ts
setCollideOnEdges(collideOnEdges: boolean): void
```
Set collide on the edges property.

### Entity.setFriction
```ts
setFriction(friction: number): void
```
Set friction property.