import { useState } from "react";

export const ServerComputing = () => {
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');

    function handleServerComputing() {
        //TODO: send area size to server
        setTmpAreaSize('');

    }

    return (<div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Server computing</h2>
        <span>Area size, cells</span>
        <input title="input Game area size"
            value={tmpAreaSize}
            placeholder='input game area for server computig'
            onChange={e => {
                if(!isNaN(Number(e.target.value))) setTmpAreaSize(e.target.value)
            }}/>
        {tmpAreaSize
            && <button onClick={() => handleServerComputing()}>Execute computing on server</button>}
    </div>)
}