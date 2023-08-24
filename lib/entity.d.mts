import { GameEvent, EntityType, EntityProperties } from "./types.mjs";
export declare class Entity {
    private _textures;
    private _currentTexture;
    private _type;
    private _eventListener;
    private _properties;
    constructor(type?: EntityType, properties?: EntityProperties);
    addTexture(textureID: string, filePath: string): void;
    setTexture(textureID: string): void;
    private _searchTexture;
    getCurrentTexture(): string;
    getCurrentTexturePath(): string;
    getType(): EntityType;
    addEventListener(event: GameEvent, callback: Function): void;
    onClick(callback: (x: number, y: number) => void): void;
    getEventListener(): {
        event: GameEvent;
        callback: Function;
    }[];
    addPath(): void;
    addText(): void;
    setX(x: number): void;
    setY(y: number): void;
    getProperties(): EntityProperties;
    getTextures(): {
        textureID: string;
        file: string;
    }[];
    moveX(x: number): void;
    moveY(y: number): void;
    setGravity(gravity: number): void;
    setCollideOnEdges(collideOnEdges: boolean): void;
}
