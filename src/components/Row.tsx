import config from '../config/default-config.json'

type Props = {
    cells: number[];
}

const Row: React.FC<Props> = ({cells}) => {
    const minSellSize = config["min-cell-size"];
    let cellSize = `${minSellSize}px`;

    const calculateCellWith = Math.min(window.innerHeight, window.innerWidth) / cells.length - 2;

    if(calculateCellWith > minSellSize) {
        cellSize = `${calculateCellWith}px`;
    }

    function getCells() {
        return cells.map((cell, index) => <div key={index} style={getStyles(cell)}></div>)
    }

    function getStyles(cell: number): React.CSSProperties {
        return cell == 0 ? {
            backgroundColor:  'lightgray',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'white',
            height: cellSize,
            width: cellSize
        }  : {
            backgroundColor: 'black',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'lightslategray',
            height: cellSize,
            width: cellSize
        }        
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {getCells()}
        </div>
    )

}

export default Row;