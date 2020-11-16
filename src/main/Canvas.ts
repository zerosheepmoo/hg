/*****************************************
| Canvas.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { Core } from "../core/Core";
import { ICanvasConfig } from "../interfaces/IConfigs";

/**
 * 캔버스 오브젝트
 * 
 * @remarks
 * 캔버스는 생성되기 위해서는 게임이 진행될 `HTMLCanvasElement` 가 반드시 필요하다.
 * 
 */
export class Canvas extends Core {
    
    ////////////////////////////////////////////////
    //              datafields
    ////////////////////////////////////////////////
    
    private _canvasElement: HTMLCanvasElement | null = null;
    private _width: number = 800;
    private _height: number = 600;
    private _color: string = '#A087F5';
    
    ////////////////////////////////////////////////
    //              constructor
    ////////////////////////////////////////////////
    
    constructor(container?: HTMLElement | string, config?: ICanvasConfig) {
        super();


        this._applyConfig(config);

        // create Canvas
        let _con: HTMLElement;
        if (typeof container === 'string') {
            // const _this = this;
            const _conTemp = document.getElementById(container);
            if (!_conTemp) {
                throw new Error("There is no such HTMLElement for Container id: " + container);
            }
            else {
                _con = _conTemp;
            }
            // document.addEventListener("DOMContentLoaded", function() {
            //     _this._create(_con);  
            // }.bind(this));
            this._create(_con);
        }
        else if (container instanceof HTMLElement || container === undefined) {
            if (container) {
                _con = container;
            }
            else {
                _con = document.body;
            }
            this._create(_con);
        }
        else {
            throw new Error("Canvas must be passed by HTMLElement container or its id.");
        }
    }
    
    ////////////////////////////////////////////////
    //              property
    ////////////////////////////////////////////////
    
    /**
     * 실제 HTMLCanvasElement
     */
    get canvasElement(): HTMLCanvasElement | null {
        return this._canvasElement;
    }

    /**
     * 너비
     */
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        if (this._width !== value) {
            this._width = value;
            if (this._canvasElement) {
                this._canvasElement.width = value;
            }
        }
    }

    /**
     * 높이
     */
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        if (this._height !== value) {
            this._height = value;
            if (this._canvasElement) {
                this._canvasElement.height = value;
            }
        }
    }

    /**
     * 캔버스 배경색
     */
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        if (this._color != value) {
            this._color = value;
            if (this._canvasElement) {
                this._canvasElement.style.backgroundColor = value;
            }
        }
    }
    
    ////////////////////////////////////////////////
    //              inner methods
    ////////////////////////////////////////////////
    
    /**
     * @internal
     * @param container - 컨테이너
     */
    private _create(container: HTMLElement) {
        // TODO 나중에 draw 함수로 통일?
        this._canvasElement = document.createElement("canvas");
        this._canvasElement.width = this._width;
        this._canvasElement.height = this._height;
        this._canvasElement.style.backgroundColor = this._color;
        container.appendChild(this._canvasElement);
    }

    /**
     * @internal
     * @param config - 설정오브젝트
     */
    protected _applyConfig(config: ICanvasConfig | undefined) {
        if (config) {
            this._height = config.height ?? 600;
            this._width = config.width ?? 800;
            this._color = config.color ?? '#A087F5'
            // this._style = this._styleAttrToString(config.style);
        }
    }
}