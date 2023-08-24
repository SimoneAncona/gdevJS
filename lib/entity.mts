import { GameEvent, EntityType, EntityProperties } from "./types.mjs";

export class Entity {
    private _textures: { textureID: string, file: string }[];
    private _currentTexture: string;
    private _type: EntityType;
    private _eventListener: { event: GameEvent, callback: Function }[];
    private _properties: EntityProperties;

    constructor(type: EntityType = "textureEntity") {
        this._textures = [];
        this._type = type;
        this._eventListener = [];
        this._properties = {
            x: 0,
            y: 0,
            xspeed: 0,
            yspeed: 0,
            transparency: 1.0,
            show: true,
            friction: 1,
            gravity: 0,
            collisions: true
        }
    }

    /**
     * Add a new texture to the entity
     * @param {string} textureID an identification 
     * @param {string} filePath the texture file 
     * @since v0.0.2
     */
    addTexture(textureID: string, filePath: string): void {
        this._textures.push({ textureID: textureID, file: filePath });
    }

    /**
     * Change the current texture
     * @param {string} textureID 
     * @since v0.0.2
     */
    setTexture(textureID: string): void {
        this._currentTexture = textureID;
    }

    private _searchTexture(textureID: string): string {
        for (let texture of this._textures) {
            if (texture.textureID === textureID) {
                return texture.file;
            }
        }
    }

    /**
     * Get the current texture file path
     * @returns {string} texture file path
     * @since v0.0.2
     */
    getCurrentTexture(): string {
        return this._searchTexture(this._currentTexture);
    }

    /**
     * Get the entity type
     * @returns {EntityType}
     * @since v0.0.2
     */
    getType(): EntityType {
        return this._type;
    }

    /**
     * Add event listener
     * @param {GameEvent} event event type 
     * @param {Function} callback the callback function
     * @since v0.0.2
     */
    addEventListener(event: GameEvent, callback: Function): void {
        this._eventListener.push({ event: event, callback: callback });
    }

    /**
     * On click event
     * @param {Function} callback
     * @since v0.0.2 
     */
    onClick(callback: (x: number, y: number) => void): void {

    }

    /**
     * Get the event list
     * @returns {Array} events
     * @since v0.0.2
     */
    getEventListener(): { event: GameEvent, callback: Function }[] {
        return this._eventListener;
    }

    addPath() {
        if (this._textures.length !== 0 && this._type === "textureEntity")
            throw "Cannot add text to a " + this._type;
        this._type = "pathEntity";
        throw "Not implemented yet";
    }

    addText() {
        if (this._textures.length !== 0 && this._type === "textureEntity")
            throw "Cannot add text to a " + this._type;
        this._type = "textEntity";
        throw "Not implemented yet";
    }

    /**
     * Set x position
     * @param {number} x
     * @since v0.0.2 
     */
    setX(x: number): void {
        this._properties.x = x;
    }

    /**
     * Set y position
     * @param {number} y
     * @since v0.0.2  
     */
    setY(y: number): void {
        this._properties.y = y;
    }

    /**
     * Get entity properties
     * @returns {EntityProperty}
     * @since v0.0.2
     */
    getProperties(): EntityProperties {
        return this._properties;
    }

    /**
     * Get all textures
     * @returns {Array} array of textures
     * @since v0.0.2
     */
    getTextures(): { textureID: string, file: string }[] {
        return this._textures;
    }
}

export const PredefinedEntities = {
    /**
     * Button entity
     * @since v0.0.2
     */
    BUTTON: new Entity(),

    /**
     * Player entity
     * @since v0.0.2
     */
    PLAYER: new Entity()
};