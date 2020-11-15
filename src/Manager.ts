/*****************************************
| Manager.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { Canvas } from "./Canvas";

/**
 * 게임 화면 생성에 관여하는 클래스
 */
export class Manager {
    public static createCanvas(container?: HTMLElement | string) {
        return new Canvas(container);
    }
}