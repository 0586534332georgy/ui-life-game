import Row from "./Row"
import config from './../config/default-config.json'
import { zeroOne } from "../model/zeroOne";
import getRandom from "../utils/generate-random";

const Matrix: React.FC = () => {
    const areaSize = config["game-area-size"];
    const lifeArray: zeroOne[][] = getRandom(areaSize);

    console.log('lifeArray: ', lifeArray);

    function getMatrix() {
        return lifeArray.map((row, index) =>            
                <Row key={index} cells={row} />)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {getMatrix()}
        </div>
    )

}

export default Matrix;