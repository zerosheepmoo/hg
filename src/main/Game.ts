/*****************************************
| Game.ts                            
| 2020. 11. 16. created by zerosheepmoo  |
******************************************/

import { ICanvasConfig, IGameConfig } from "../interfaces/IConfigs";
import { Canvas } from "./Canvas";

export class Game {

    
    ////////////////////////////////////////////////
    //              data field
    ////////////////////////////////////////////////
    
    private _canvas: Canvas;

    ////////////////////////////////////////////////
    //              constructor
    ////////////////////////////////////////////////
    
    constructor(config?: IGameConfig) {
        this._canvas = this._createCanvas(config?.container, config?.canvas)
    }
    
    
    ////////////////////////////////////////////////
    //              property
    ////////////////////////////////////////////////
    /**
     * 캔바스 오브젝트
     * 
     * @readonly
     */
    get canvas() {
        return this._canvas;
    }

    ////////////////////////////////////////////////
    //              inner method
    ////////////////////////////////////////////////
    
    /**
     * 캔바스 생성함수
     * 
     * @internal
     * 
     * @param container - 컨테이너 id 및 element
     * @param config - 캔버스 설정 오브젝트
     */
    private _createCanvas(container?: HTMLElement | string, config?: ICanvasConfig) {
        return new Canvas(container, config);
    }
}