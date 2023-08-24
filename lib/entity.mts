import { EntityEvent, EntityType } from "./types.mjs";

export class Entity {
    private _textures: { textureID: string, file: string }[];
    private _currentTexture: string;
    private _type: EntityType;
    private _eventListener: { event: EntityEvent, callback: Function }[];

    constructor(type: EntityType = "textureEntity") {
        this._textures = [];
        this._type = type;
        this._eventListener = [];
    }

    /**
     * Add a new texture to the entity
     * @param {string} textureID an identification 
     * @param {string} filePath the texture file 
     * @since v0.0.1
     */
    addTexture(textureID: string, filePath: string): void {
        this._textures.push({ textureID: textureID, file: filePath });
    }

    /**
     * Change the current texture
     * @param {string} textureID 
     * @since v0.0.1
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
     * @since v0.0.1
     */
    getCurrentTexture(): string {
        return this._searchTexture(this._currentTexture);
    }

    /**
     * Get the entity type
     * @returns {EntityType}
     * @since v0.0.1
     */
    getType(): EntityType {
        return this._type;
    }

    /**
     * Add event listener
     * @param {EntityEvent} event event type 
     * @param {Function} callback the callback function
     * @since v0.0.1
     */
    addEventListener(event: EntityEvent, callback: Function): void {

    }

    /**
     * On click event
     * @param {Function} callback
     * @since v0.0.1 
     */
    onClick(callback: (x: number, y: number) => void): void {

    }
}

export const PredefinedEntities = {
    /**
     * Button entity
     * @since v0.0.1
     */
    BUTTON: new Entity(),

    /**
     * Player entity
     * @since v0.0.1
     */
    PLAYER: new Entity()
};