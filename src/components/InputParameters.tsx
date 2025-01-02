import { useState } from "react";

type Params = {
    areaSize: number;
    ticInterval: number;
    setAreaSize: (s: number) => void;
    setTicInterval: (t: number) => void;
}

export const InputParameters: React.FC<Params> = ({areaSize, ticInterval, setAreaSize, setTicInterval}) => {
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');
    const [tmpTicInterval, setTmpTicInterval] = useState<string>('');

    function setNewParams() {
        if (tmpAreaSize) setAreaSize(Number(tmpAreaSize));
        if (tmpTicInterval) setTicInterval(Number(tmpTicInterval));
        setTmpAreaSize('');
        setTmpTicInterval('');
    }

    return (
        <div style={{display:'flex', flexDirection:'column' }}>
            <h1>Game parameters:</h1>
            <h2>Live view</h2>
            <span>Area size, cells</span>
            <input title="input Game area size" 
                    value={tmpAreaSize}
                    placeholder={`now is ${areaSize}`} 
                    onChange={e => {
                        if(!isNaN(Number(e.target.value))) setTmpAreaSize(e.target.value);
                    }} />
            <span>Tic interval, ms</span>
            <input title="input Tic interval" placeholder={`now is ${ticInterval}`} 
                    value={tmpTicInterval}
                    onChange={e => {
                        if(!isNaN(Number(e.target.value))) setTmpTicInterval(e.target.value)
                        }} />
            {(tmpAreaSize || tmpTicInterval) 
                && <button onClick={() => setNewParams()}>Set parameters and start new Game</button>}
        </div>
    )

}