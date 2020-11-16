/*****************************************
| Core.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

import { IConfig, IStyleObject } from "../interfaces/IConfigs";

/**
 * 코어 클래스, 타입스크립트의 제한적인 부분을 쉽게 커버하기 위함과 공통적인 기능들 위함
 */
export class Core {

    protected _free(prop: string) {
        const _this = this as any;
        _this[prop] = null;
    }

    // 필요없음
    // /**
    //  * style attribute 를 string 형태로 만들어준다.
    //  * 
    //  * @internal
    //  * @param obj - 스타일 오브젝트
    //  */
    // protected _styleAttrToString(obj: IStyleObject) {
    //     // TODO string concat 는 performance 가 좋지 못하므로 해결바람.
    //     let res = '';
    //     for (let attr in obj) {
    //         res += attr + ':' + obj[attr] + ';';
    //     }
    //     return res;
    // }

    // /**
    //  * @internal
    //  * @param config - 설정오브젝트
    //  */
    // protected _applyConfig(config: IConfig | undefined) {
    //     const _this = this as any;
    //     const _config = config as any;

    //     for (let prop in _config) {
            
    //     }
    // }

    // /**
    //  * @internal
    //  * 
    //  * @param obj -
    //  * @param config -
    //  */
    // private _applyConfigHelper(obj: any, config: any) {

    //     for (let prop in config) {
    //         const v = config[prop];
    //         if (Array.isArray(v)) {

    //         }
    //         else if (typeof v === 'object') {
    //             this._applyConfigHelper();
    //         }
    //         else {
    //             obj["_"+prop] = v;
    //         }
    //     }
    // }
}