import "./Cell.css";

function Cell(){
    return (
        <div className="cell">
            <input type="text" maxLength={1} />
        </div>
    )
}

export default Cell;