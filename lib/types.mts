export type EntityType =
    "textureEntity" | "pathEntity" | "textEntity"

export type GameEvent =
    "onClick" | "onKeyDown" | "onKeyUp";

export type EntityProperties = {
    x: number,
    y: number,
    xspeed: number,
    yspeed: number,
    show: boolean,
    /**
     * Transparency property from 0.0 to 1.0
     */
    transparency: number,
    friction: number,
    gravity: number,
    collisions: boolean,
}