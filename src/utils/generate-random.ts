import {zeroOne} from './../model/zeroOne'; 


export default function getRandom(size: number): zeroOne[][] {
    let res: zeroOne[][] = [];
    for(let i = 0; i < size; i ++) {
        res[i] = [];
        for(let j = 0; j < size; j++) {
            res[i][j] = getRandomCell();
        }
    }

    function getRandomCell(): zeroOne {
        
        return Math.trunc(Math.random() * 2) as zeroOne;
    }

    return res;

}