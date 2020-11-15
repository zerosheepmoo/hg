/*****************************************
| Core.ts                            
| 2020. 11. 15. created by zerosheepmoo  |
******************************************/

/**
 * 코어 클래스, 타입스크립트의 제한적인 부분을 쉽게 커버하기 위함과 공통적인 기능들 위함
 */
export class Core {

    protected _free(prop: string) {
        const _this = this as any;
        _this[prop] = null;
    }
}