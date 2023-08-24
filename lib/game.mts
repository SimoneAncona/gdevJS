import { Canvas, CanvasOptions } from "simply2d";
import { Entity } from "./entity.mjs";
import { GameEvent } from "./types.mjs";

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
    }

    /**
     * Add a new entity into the current game
     * @param {string} entityID entity ID 
     * @param {Entity} entity the entity object
     * @since v0.0.1 
     */
    addEntity(entityID: string, entity: Entity) {
        for (let entity of this._entities) {
            if (entity.id === entityID)
                throw "Cannot add a new entity with the same id as another";
        }
        this._entities.push({ id: entityID, entity: entity });
    }

    /**
     * Remove an entity from the game
     * @param {string} entityID the entity ID
     * @since v0.0.1 
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
     * @since v0.0.1
     */
    onClick(callback: (x: number, y: number) => void): void {
        let bypassCallback = (x: number, y: number) => {
            this._handleEntitiesEvent<number>("onClick", [x, y]);
            callback(x, y);
        }
        super.onClick(bypassCallback);
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
                entity.getEventListener().filter(e => e.event === "onKeyDown").forEach(e => e.callback(values[0], values[1]));
                break;
        }
    }
}