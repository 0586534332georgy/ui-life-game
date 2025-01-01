import { zeroOne } from "../model/zeroOne";

export class Life {
    constructor(private _dwellers: zeroOne[][]) {}

    getCells(): zeroOne[][] {
        return this._dwellers;
    }

    getMatrixArea(i: number, j: number): number {
        const borderLeft: number = j == 0 ? 0 : j - 1;
        const borderRight: number = j == this._dwellers[0].length ? j + 1 : j + 2;

        [this._dwellers[i - 1], this._dwellers[i], this._dwellers[i + 1]].reduce

        return 0;
    }
}