import { useState } from 'react';
import ChartArea from '../components/ChartArea';
import { ServerComputing } from '../components/ServerComputing';

type DataType = {
    dataKey: string,
    alive: number,
    dead: number,
}

export const BackCompute: React.FC = () => {

    const [datas, setDatas] = useState<DataType[]>([]);

    return (
        <div className="BackCompute" style={{
            display: 'flex', flexDirection: 'row',
            height: '100vh', justifyContent: 'center'
        }}>

            <ChartArea data={datas} />
            <ServerComputing datas={datas} setDatas={setDatas} />

        </div>
    )

}