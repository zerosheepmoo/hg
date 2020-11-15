/*****************************************
| Canvas.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { Core } from "./core/Core";
import { ICanvasConfig } from "./interfaces/IConfigs";

/**
 * 게임 화면에 관한 클래스
 */
export class Canvas extends Core {

    
    ////////////////////////////////////////////////
    //              datafields
    ////////////////////////////////////////////////
    
    private _canvasElement: HTMLCanvasElement | null = null;
    private _width: number = 800;
    private _height: number = 600;
    
    ////////////////////////////////////////////////
    //              constructor
    ////////////////////////////////////////////////
    
    constructor(container?: HTMLElement | string, config?: ICanvasConfig) {
        super();


        this._applyConfig(config);

        // create Canvas
        let _con: HTMLElement;
        if (typeof container === 'string') {
            const _this = this;
            document.addEventListener("DOMContentLoaded", function() {
                const _conTemp = document.getElementById(container);
                if (!_conTemp) {
                    throw new Error("There is no such HTMLElement for Container id: " + container);
                }
                else {
                    _con = _conTemp;
                }
                _this._create(_con);
            });
        }
        else {
            if (container) {
                _con = container;
            }
            else {
                _con = document.body;
            }
            this._create(_con);
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
        this._width = value;
        if (this._canvasElement) {
            this._canvasElement.width = value;
        }
    }

    /**
     * 높이
     */
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
        if (this._canvasElement) {
            this._canvasElement.height = value;
        }
    }
    
    ////////////////////////////////////////////////
    //              inner methods
    ////////////////////////////////////////////////
    
    private _create(container: HTMLElement) {
        this._canvasElement = document.createElement("canvas");
        this._canvasElement.width = this._width;
        this._canvasElement.height = this._height;

        container.appendChild(this._canvasElement);
    }

    private _applyConfig(config: ICanvasConfig | undefined) {
        if (config) {
            this._height = config.height;
            this._width = config.width;
        }
    }
}