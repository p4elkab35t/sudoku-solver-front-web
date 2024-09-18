// import React from 'react';
import './Board.css';
import Cell from './Cell';
import React, { ReactNode } from 'react';

interface BoardProps {
    boardSize?: number;
    isLoading?: boolean;
}

const Board: React.FC<BoardProps> = ({boardSize = 9, isLoading = false}) => {



    const cells: Array<ReactNode> = [];
    for (let i = 0; i < boardSize * boardSize; i++) {
        // console.log(i);
        cells.push(<Cell cellKey={i} key={i} isLoading={isLoading} />);
        // console.log(cells);
    }

    return (
        <div className="board">
            {cells}
        </div>
    )
}

export default Board;