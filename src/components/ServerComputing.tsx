import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { fetchServerInit, fetchServerNext } from "../utils/fetchServer";
//message: 'Life matrix initialized', areaSize

export const ServerComputing = () => {
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');
    const [serverAreaSize, setServerAreaSize] = useState<string>('');
    const [errorServerConnection, setErrorServerConnection] = useState<string>('');

    async function handleServerConnection() {
        const areaSize = parseInt(tmpAreaSize, 10);
        const serverInit = await fetchServerInit({areaSize, setErrorServerConnection});
        console.log("serverInit: ", serverInit);
        if (typeof serverInit === 'number') {
            setServerAreaSize(serverInit.toString());
            setTmpAreaSize('');
        } else {
            console.error("serverInit is not a number");
        }
    }

    function handleServerComputing() {
        fetchServerNext();        
    }

    return (<div style={{ display: 'flex', flexDirection: 'column' }}>

        <Typography variant="button" gutterBottom sx={{ display: 'block', fontWeight: 'bold' }}>Server computing</Typography>
        <Typography variant="subtitle1" gutterBottom>Input game area for server computig, cells</Typography>
        <TextField id="standard-basic" label="recomended: x 1'000"
            value={tmpAreaSize}
            variant="standard"
            onChange={e => {
                if (!isNaN(Number(e.target.value))) {
                    const value = e.target.value.replace("-", "");
                    setTmpAreaSize(value)
                }
            }} />

        {tmpAreaSize
            && <Button onClick={handleServerConnection}
                variant="contained"
                sx={{ backgroundColor: 'green', margin: '10px' }}
                endIcon={<SendIcon />}>
                Test server connection
            </Button>
        }

        {serverAreaSize && <Typography>Life matrix initialized on server: {serverAreaSize}&times;{serverAreaSize}</Typography>}
        {errorServerConnection && <Typography>{errorServerConnection}</Typography>}

        {serverAreaSize
            && <Button onClick={() => handleServerComputing()}
                variant="contained"
                sx={{ backgroundColor: 'orange', margin: '10px' }}
                endIcon={<PlayCircleOutlineIcon />}>
                Execute computing on server
            </Button>
        }
    </div>)
}