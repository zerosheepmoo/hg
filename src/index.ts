/*****************************************
| index.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { Manager } from "./Manager"

export { Manager };

// for debugs

let _window = window as any;
_window.HG = Manager;

let con = document.createElement("div");
con.id = 'game';
document.body.appendChild(con);

let gameConfig = {
    container: 'game',
    canvas: {
        width: 1000,
        height: 500
    }
}

let game = Manager.createGame(gameConfig);