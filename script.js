
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
    console.log("WIN RESULT: " + win);

    await computerTurn();

}


function calculateWin(element, rows)
{
    console.log("-- CALCULATE WIN --");

    let columns = boxes[0].parentElement.parentElement.children;

    let x = Array.prototype.indexOf.call(columns, rows[0].parentElement);
    let reverseY = Array.prototype.indexOf.call(rows, element);
    let y = Array.prototype.indexOf.call([...rows].reverse(), element);
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("reverseY: " + reverseY);

    // Horizontal
    let matches = 0;
    for (let i = 0; i < [...columns].length; i++)
    {
        let columnBox = [...columns][i].children[reverseY];
        
        if (columnBox.dataset.user === "1")
        {
            matches += 1;
        }
        else
        {
            matches = 0;
        }

        if (matches == 4)
        {
            return true;
        }
    };
    // console.log("matches horizontal: " + matches);
    
    // Vertical
    matches = 0;
    for (let i = 0; i < [...rows].length; i++)
    {
        let box = [...rows][i];
        if (box.dataset.user === "1")
        {
            matches += 1;
        }
        else
        {
            matches = 0;
        }

        if (matches == 4)
        {
            return true;
        }
    }
    // console.log("matches vertical: " + matches);

    // Diagonal bottom left - top right
    let xMin = 0;
    let xMax = 6;
    let yMin = 0;
    let yMax = 5;

    let startX = x;
    let startY = y;

    while (startX != xMin && startY != yMin)
    {
        startX -= 1;
        startY -= 1;
        console.log("done");
    }

    console.log("startX: " + startX);
    console.log("startY: " + startY);

    

    // console.log(columns);


    return false;
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