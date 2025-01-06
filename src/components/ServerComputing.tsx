import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { fetchServerInit } from "../utils/fetchServer";

export const ServerComputing = () => {
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');

    function hahdleServerConnection() {

    }

    function handleServerComputing() {
        fetchServerInit(parseInt(tmpAreaSize, 10));
        setTmpAreaSize('');

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
            && <Button onClick={() => handleServerComputing()}
                variant="contained"
                sx={{ backgroundColor: 'orange', margin: '10px' }}
                endIcon={<SendIcon />}>
                Execute computing on server
            </Button>
        }
    </div>)
}