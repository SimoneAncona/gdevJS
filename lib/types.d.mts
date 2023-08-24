export type EntityType = "textureEntity" | "pathEntity" | "textEntity";
export type GameEvent = "onClick" | "onKeyDown" | "onKeyUp";
export type EntityProperties = {
    x: number;
    y: number;
    xspeed: number;
    yspeed: number;
    show: boolean;
    transparency: number;
    friction: number;
    gravity: number;
    collisions: boolean;
    collideAtEdges: boolean;
};
