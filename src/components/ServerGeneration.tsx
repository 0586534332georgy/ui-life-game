import { useEffect, useState } from "react";
import { fetchServerNext } from "../utils/fetchServer";
import { Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { DataType } from "../model/types";

type ResponseNextProps = {
    generation: number,
    alives: number;
}

type Props = {
    datas: DataType[];
    setDatas: (datas: DataType[]) => void;
    serverAreaSize: number;
    initialAlives: number
}

export const ServerGeneration: React.FC<Props> = ({datas, setDatas, serverAreaSize, initialAlives}) => {
        const matrixTotalSize = serverAreaSize ** 2;
        const [toggleCalculating, setToggleCalculating] = useState<boolean>(false);
        const [errorServerConnection, setErrorServerConnection] = useState<string>('');

    async function handleServerComputing() {
        if (toggleCalculating) {

            const resp: ResponseNextProps = await fetchServerNext(setErrorServerConnection);
            const data: DataType = {
                dataKey: resp.generation.toString(),
                alive: resp.alives,
                dead: matrixTotalSize - resp.alives
            };
            setDatas([...datas, (data)]);
        }
    }

    useEffect(() => {
        const pushData = async () => {
            await handleServerComputing();
        }

        pushData();
    }, [datas, toggleCalculating]);

    return (
        <>
         <Typography>
            Life matrix initialized on server: {serverAreaSize}&times;{serverAreaSize}, <br/>
            initial alives: {initialAlives} of {matrixTotalSize} cells
        </Typography>
        {errorServerConnection && <Typography style={{ color: 'red' }}>{errorServerConnection}</Typography>}

        
            <Button onClick={() => {
                setToggleCalculating(true);
                handleServerComputing();
            }}
                variant="contained"
                sx={{ backgroundColor: 'green', margin: '10px' }}
                endIcon={<PlayCircleOutlineIcon />}>
                Execute computing on server
            </Button>
        
        {toggleCalculating &&
            <Button onClick={() => setToggleCalculating(false)}
                variant="contained"
                sx={{ backgroundColor: 'violet', margin: '10px' }}
                endIcon={<StopCircleOutlinedIcon />}>
                Stop server calculating
            </Button>}
    
        
        </>
    )


}