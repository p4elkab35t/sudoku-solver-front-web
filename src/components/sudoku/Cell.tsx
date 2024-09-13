import "./Cell.css";
import React from "react";

interface CellProps {
    cellKey: number;
}

const functionKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Enter", "F5"];



const Cell: React.FC<CellProps> = ({cellKey}) => {

    const id: string = cellKey.toString();

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.classList.add("focused");
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.classList.remove("focused");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const regex = /^[1-9\b]$/;
        if (!regex.test(e.key) && !functionKeys.includes(e.key)) {
            e.preventDefault();
        }

        if (e.key === "Backspace" || e.key === "Delete") {
            e.currentTarget.value = "";
        }

        const numId = parseInt(id);

        let changeSide = 0;

        switch (e.key) {
            case "ArrowLeft":
                changeSide = (numId % 9 === 0) ? 8 : -1;
                break;
            case "ArrowRight":
                changeSide = (numId % 9 === 8) ? -8 : 1;
                break;
            case "ArrowUp":
                changeSide = (numId < 9) ? 72 : -9;
                break;
            case "ArrowDown":
                changeSide = (numId > 71) ? -72 : 9;
                break;
            default:
                return; // Exit if the key is not an arrow key
        }

        const nextFocus = document.getElementById((numId + changeSide).toString());

        if (nextFocus) {
            nextFocus.focus();
            if (nextFocus.children[0].nodeValue === null) {
                (nextFocus.children[0] as HTMLElement).focus();
            }
        }

        

    };

    let classNames: string;

    if(cellKey % 9 < 3 && cellKey < 27) {
        classNames = "cell left top";
    }
    else if(cellKey % 9 < 3 && cellKey > 53) {
        classNames = "cell left bottom";
    }
    else if(cellKey % 9 > 5 && cellKey < 27) {
        classNames = "cell right top";
    }
    else if(cellKey % 9 > 5 && cellKey > 53) {
        classNames = "cell right bottom";
    }
    else if(cellKey % 9 >= 3 && cellKey % 9 <= 5 && cellKey >= 27 && cellKey <= 53) {
        classNames = "cell middle middle";
    }
    else{
        classNames = "cell";
    }
    if(cellKey % 9 == 2 || cellKey % 9 == 5) {
        classNames += " border-right";
    }
    if(Math.floor(cellKey / 9) == 2 || Math.floor(cellKey / 9) == 5 ) {
        classNames += " border-bottom";
    }
    

    

    return (
        // console.log(id, " created"),
        <div className={classNames} id={id}>
            <input type="text" className="cellEntry" maxLength={1} onBlur={handleBlur} onFocus={handleFocus} onKeyDown={handleKeyPress} autoFocus/>
        </div>
    )
}

export default Cell;