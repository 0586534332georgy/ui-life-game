import Row from "./Row"
import config from './../config/default-config.json'
import { zeroOne } from "../model/zeroOne";
import getRandom from "../utils/generate-random";

const Matrix: React.FC = () => {
    const areaSize = config["game-area-size"];
    const lifeArray: zeroOne[][] = getRandom(areaSize);

    function getMatrix() {
        return lifeArray.map(row =>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {getRow(row)}
            </div>)
    }

    function getRow(row: zeroOne[]) {
        return <Row cells={row} />

    }

    return (
        <div>
            {getMatrix()}
        </div>
    )

}

export default Matrix;