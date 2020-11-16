/*****************************************
 | Circle.ts                            
 | 2020. 11. 16. created by zerosheepmoo  |
 ******************************************/

import { VectorType } from "../consts/Type";
import { Vector } from "./Vector"

/**
 * 서클 클래스
 */
export class Circle extends Vector{

    ////////////////////////////////////////////////
    //              data field
    ////////////////////////////////////////////////
    
    protected _type = VectorType.CIRCLE;
    private _radius = 1;
    
    ////////////////////////////////////////////////
    //              constructor
    ////////////////////////////////////////////////
    
    constructor(ctx: CanvasRenderingContext2D,radius: number) {
        super(ctx);
        this._radius = radius;
    }

    ////////////////////////////////////////////////
    //              property
    ////////////////////////////////////////////////

    get radius() {
        return this._radius;
    }
    set radius(value: number) {
        if (this._radius !== value) {
            this._radius = value;
        } 
    }
    
    ////////////////////////////////////////////////
    //              methods
    ////////////////////////////////////////////////
    protected _draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI);
        this.ctx.stroke();
    }
}