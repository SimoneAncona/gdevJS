import { Canvas, CanvasOptions } from "simply2d";
import { Entity } from "./entity.mjs";
import { Key } from "simply2d/lib/types.js";
export declare class Game extends Canvas {
    private _eventListener;
    private _entities;
    constructor(title: string, width: number, height: number, xPos?: number, yPos?: number, options?: CanvasOptions);
    addEntity(entityID: string, entity: Entity): void;
    removeEntity(entityID: string): void;
    onClick(callback: (x: number, y: number) => void): void;
    onKeyDown(callback: (k: Key) => void): void;
    onKeyUp(callback: (k: Key) => void): void;
    private _handleEntitiesEvent;
    private _handleSingleEntityEvents;
    loop(callback: () => void): Promise<void>;
    private _renderEntities;
    private _updatePhysics;
    start(): void;
}
