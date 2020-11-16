/*****************************************
| IConfigs.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

export interface IConfig {

}

/**
 * HTMLElement style 속성 내 속성들.
 * 
 * @example
 * ```js
 * canvas.style.color = 'blue';
 * 
 * // to configure
 * style: {
 *      color: 'blue'
 * }
 * ```
 */
export interface IStyleObject {
    [attr: string]: any;
}

/**
 * 캔버스 옵션의 설정 형식
 */
export interface ICanvasConfig {
    width?: number;
    height?: number;
    color?: string;
    style?: IStyleObject;
}

/**
 * 게임 옵션의 설정형식
 */
export interface IGameConfig {
    container?: HTMLElement | string;
    canvas?: ICanvasConfig;
}