import { zeroOne } from "../model/zeroOne";

type Props = {
    cells: zeroOne[];
}

const Row: React.FC<Props> = ({cells}) => {
    let cellSize = '2px';

    const calculateCellWith = Math.trunc(Math.min(window.innerHeight, window.innerWidth) / cells.length);

    if(calculateCellWith > 2) {
        cellSize = `${calculateCellWith}px`;
    }

    function getCells() {
        return cells.map((cell, index) => <div key={index} style={getStyles(cell)}></div>)
    }

    function getStyles(cell: zeroOne) {
        return {
            backgroundColor: cell == 0 ?'white' : 'black',
            heigh: cellSize,
            with: cellSize
        }         
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {getCells()}
        </div>
    )

}

export default Row;