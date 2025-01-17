import { useState } from "react";
import { DataType } from "../model/types";
import { ServerConnection } from "./ServerConnection";
import { ServerGeneration } from "./ServerGeneration";

type SetDatasType = {
    datas: DataType[];
    setDatas: (datas: DataType[]) => void;
}

export const ServerComputing: React.FC<SetDatasType> = ({ datas, setDatas }) => {
    const [serverAreaSize, setServerAreaSize] = useState<number>();
    const [initialAlives, setInitialAlives] = useState<number>();

    return (<div style={{ display: 'flex', flexDirection: 'column' }}>

        <ServerConnection setDatas={setDatas} setServerAreaSize={setServerAreaSize}
            setInitialAlives={setInitialAlives} />

        {serverAreaSize &&
            <ServerGeneration datas={datas} setDatas={setDatas} serverAreaSize={serverAreaSize}
                initialAlives={initialAlives!} />
        }

    </div>)
}