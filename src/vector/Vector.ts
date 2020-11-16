/*****************************************
| Vector.ts                            
| 2020. 11. 16. created by zerosheepmoo  |
******************************************/

import { VectorType } from "../consts/Type";

/**
 * 벡터 클래스
 */
export abstract class Vector {
    
    ////////////////////////////////////////////////
    //              data field
    ////////////////////////////////////////////////
    
    private _x: number = 0;
    private _y: number = 0;
    protected abstract _type: VectorType;
    private _ctx: CanvasRenderingContext2D;

    ////////////////////////////////////////////////
    //              constructor
    ////////////////////////////////////////////////
    
    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
    }

    ////////////////////////////////////////////////
    //              property
    ////////////////////////////////////////////////
    
    /**
     * x
     */
    get x() {
        return this._x;
    }
    set x(value: number) {
        if (this._x !== value) {
            this._x = value;
        }
    }

    /**
     * y
     */
    get y() {
        return this._y;
    }
    set y(value: number) {
        if (this._y !== value) {
            this._y = value;
        }
    }

    get ctx() {
        return this._ctx;
    }

    /**
     * 종류
     */
    get type() {
        return this._type;
    }

    
    ////////////////////////////////////////////////
    //              methods
    ////////////////////////////////////////////////
    
    protected abstract _draw(): void;
    
    protected _acc(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    
        this._draw();
    }
    
    protected _to(x: number, y: number) {
        this.x = x;
        this.y = y;
    
        this._draw();
    }
}