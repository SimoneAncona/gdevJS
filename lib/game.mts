import { Canvas, CanvasOptions } from "simply2d";
import { Entity } from "./entity.mjs";
import { GameEvent } from "./types.mjs";

export class Game extends Canvas {
    private _eventListener: { event: GameEvent, callback: Function }[];

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
    }

    addEntity(entityID: string, entity: Entity) {

    }

    removeEntity(entityID: string, entity: Entity) {

    }
}