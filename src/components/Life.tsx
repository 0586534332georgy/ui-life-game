import getRandomMatrix from "../utils/generateRandom";
import Matrix from "./Matrix"
import config from './../config/default-config.json'
import { useEffect, useRef, useState } from "react";
import { LifeMatrix } from "../services/LifeMatrix";

type Props = {
    areaSize: number;
    gameTicInterval: number;
}

export const Life: React.FC<Props> = ({areaSize, gameTicInterval}) => {

    const [lifeArray, setLifeArray] = useState<number[][]>([]);    
    const lifeMatrix = useRef<LifeMatrix>();

    function tic() {
        if(lifeMatrix.current == null) {
            getNewLifeMatrix();
        };
        setLifeArray(lifeMatrix.current!.nextGeneration());
    }

    useEffect(() => {
        const interval = setInterval(tic, gameTicInterval);
        return () => clearInterval(interval);
    }, [gameTicInterval])

    useEffect(() => {
        getNewLifeMatrix();
    }, [areaSize]);

    function getNewLifeMatrix() {
        lifeMatrix.current = new LifeMatrix(getRandomMatrix(areaSize));
    }

    return (
        <div>
            <Matrix lifeArray={lifeArray}/>
        </div>
    )

}