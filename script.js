
const boxes = document.getElementsByClassName("box");

[...boxes].forEach(element => {
    element.addEventListener("click", rowClick, false)
});


async function rowClick(event) {
    let element = event.target
    let parentDiv = element.parentElement;

    let rows = parentDiv.children
    // let column = Array.prototype.indexOf.call(rows, element);
    // console.log(rows);
    // console.log(column);

    // get and edit box at lowest point
    // console.log(columns);
    let lowestBox = getLowestBox(rows);
    // console.log(lowestBox);

    lowestBox.style.backgroundColor = "red";
    lowestBox.dataset.user = 1;

    let win = calculateWin(lowestBox, rows);
    console.log(win);

    await computerTurn();

}


function calculateWin(element, rows)
{
    console.log("CALCULATE WIN")
    // calculate horizontal
    let columnIndex = element;
    console.log(element)


    return true;
}

// function checkDirection(element, nextElement, adjacent)
// {
//     let x = 2;
//     let y = 3;
// }


async function computerTurn() {
    await new Promise(r => setTimeout(r, 200));

    // console.log(boxes);

    let possibleColumns = [];
    for (i = 0; i < [...boxes].length; i = i + 6) {
        let box = [...boxes][i];
        if (box.dataset.user === undefined)
        {
            possibleColumns.push(box);
        }
    }

    let choosenColumn = possibleColumns[Math.floor(Math.random() * possibleColumns.length)];

    // let column = Array.prototype.indexOf.call(boxes, choosenColumn);

    let lowestBox = getLowestBox(choosenColumn.parentElement.children);

    lowestBox.style.backgroundColor = "green";
    lowestBox.dataset.user = 2;

    await new Promise(r => setTimeout(r, 200));
}


function getLowestBox(rows) {
    const reversedRows = [...rows].reverse();
    for (let element of reversedRows) {
        if (element.dataset.user === undefined) {
            return element;
        }
    }
}