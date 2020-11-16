import { IGameConfig } from "./interfaces/IConfigs";
/*****************************************
| Manager.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { Game } from "./main/Game";

/**
 * 게임 생성에 관여하는 클래스
 */
export class Manager {
    /**
     * 화면상에 캔바스를 생성한 후, {@link Canvas} 객체를 반환한다.
     * 
     * @param container - `HTMLCanvasElement` 를 자식으로 가질 container `HTMLElement`, 또는 그의 `id`. 설정하지 않으면 `document.body`를 기준으로 한다.
     * 
     */
    public static createGame(config?: IGameConfig) {
        return new Game(config);
    }
}