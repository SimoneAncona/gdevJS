import { Canvas, CanvasOptions } from "simply2d";
import { Entity } from "./entity.mjs";
import { EntityProperties, GameEvent } from "./types.mjs";
import { Key } from "simply2d/lib/types.js";

export class Game extends Canvas {
    private _eventListener: { event: GameEvent, callback: Function }[];
    private _entities: { id: string, entity: Entity }[];

    constructor(
        title: string,
        width: number,
        height: number,
        xPos: number = 0,
        yPos: number = 0,
        options: CanvasOptions = {
            mode: "shown",
            resizable: false,
            scale: 1,
            antiAliasing: true
        }
    ) {
        super(title, width, height, xPos, yPos, options);
        this._eventListener = [];
        this._entities = [];
        this.onClick((x, y) => { });
        this.onKeyDown((k) => { });
        this.onKeyUp((k) => { });
        this.onKeysDown((ks) => { });
        this.onKeysUp((ks) => { });
    }

    /**
     * Add a new entity into the current game
     * @param {string} entityID entity ID 
     * @param {Entity} entity the entity object
     * @since v0.0.2 
     */
    addEntity(entityID: string, entity: Entity) {
        for (let entity of this._entities) {
            if (entity.id === entityID)
                throw "Cannot add a new entity with the same id as another";
        }
        this._entities.push({ id: entityID, entity: entity });
        switch (entity.getType()) {
            case "textureEntity":
                entity.getTextures().forEach(texture => this.loadTexture(entityID + "_" + texture.textureID, texture.file));
                break;
            case "textEntity":
                break;
            case "pathEntity":
                break;
        }
    }

    /**
     * Remove an entity from the game
     * @param {string} entityID the entity ID
     * @since v0.0.2 
     */
    removeEntity(entityID: string) {
        for (let i = 0; i < this._entities.length; i++) {
            if (this._entities[i].id === entityID) {
                this._entities.splice(i, 1);
            }
        }
    }

    /**
     * 
     * @param {Function} callback a function that takes x and y as arguments
     * @since v0.0.2
     */
    onClick(callback: (x: number, y: number) => void): void {
        let bypassCallback = (x: number, y: number) => {
            this._handleEntitiesEvent<number>("onClick", [x, y]);
            callback(x, y);
        }
        super.onClick(bypassCallback);
    }

    /**
     * 
     * @param {Function} callback a function that takes the key as argument
     * @since v0.0.2
     */
    onKeyDown(callback: (k: Key) => void): void {
        let bypassCallback = (k: Key) => {
            this._handleEntitiesEvent<Key>("onKeyDown", [k]);
            callback(k);
        }
        super.onKeyDown(bypassCallback);
    }

    /**
     * 
     * @param {Function} callback a function that takes the key as argument
     * @since v0.0.2
     */
    onKeyUp(callback: (k: Key) => void): void {
        let bypassCallback = (k: Key) => {
            this._handleEntitiesEvent<Key>("onKeyUp", [k]);
            callback(k);
        }
        super.onKeyUp(bypassCallback);
    }

    private _handleEntitiesEvent<T>(event: GameEvent, values: Array<T>) {
        for (let entity of this._entities) {
            this._handleSingleEntityEvents(entity.entity, event, values);
        }
    }

    private _handleSingleEntityEvents<T>(entity: Entity, event: GameEvent, values: Array<T>) {
        switch (event) {
            case "onClick":
                entity.getEventListener().filter(e => e.event === "onClick").forEach(e => e.callback(values[0], values[1]));
                break;
            case "onKeyDown":
                entity.getEventListener().filter(e => e.event === "onKeyDown").forEach(e => e.callback(values[0]));
                break;
            case "onKeyUp":
                entity.getEventListener().filter(e => e.event === "onKeyUp").forEach(e => e.callback(values[0]));
                break;
        }
    }

    /**
     * 
     * @param {Function} callback a repeated drawing process
     * @since v0.0.2
     */
    async loop(callback: () => void) {
        let bypassCallback = () => {
            this._renderEntities();
            callback();
        }
        super.loop(bypassCallback);
    }

    private _renderEntities() {
        for (let entity of this._entities) {
            let properties = entity.entity.getProperties();
            this._updatePhysics(properties);
            switch (entity.entity.getType()) {
                case "textureEntity":
                    this.drawTexture(entity.id + "_" + entity.entity.getCurrentTexture(), { x: properties.x, y: properties.y });
                    break;
                case "textEntity":
                    break;
                case "pathEntity":
                    break;
            }
        }
    }

    private _updatePhysics(entityProperties: EntityProperties) {

    }

    /**
     * Start the game
     * @since v0.0.2
     */
    start() {
        this.loop(() => { });
    }
}