import "./Cell.css";
import React from "react";

interface CellProps {
    cellKey: number;
}

const Cell: React.FC<CellProps> = ({cellKey}) => {

    const id: string = cellKey.toString();

    return (
        console.log(id, " created"),
        <div className="cell" id={id}>
            <input type="text" maxLength={1} />
        </div>
    )
}

export default Cell;