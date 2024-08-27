
const boxes = document.getElementsByClassName("box");

[...boxes].forEach(element => {
    element.addEventListener("click", rowClick, false)
});


async function rowClick(event)
{
    let element = event.target
    let parentDiv = element.parentElement;

    let columns = parentDiv.children
    let row = Array.prototype.indexOf.call(columns, element);
    console.log(row);

    // get and edit box at lowest point
    // console.log(columns);
    getLowestBox(row);

    element.style.backgroundColor = "red";
    element.dataset.user=1;

    await computerTurn();

}


async function computerTurn()
{
    await new Promise(r => setTimeout(r, 200));

    // console.log([...boxes][0].dataset.user);
    let possibleBoxes = [...boxes].filter((box) => box.dataset.user === undefined)

    let choosenBox = possibleBoxes[Math.floor(Math.random() * possibleBoxes.length)];

    // console.log(choosenBox);

    // console.log(possibleBoxes);


    await new Promise(r => setTimeout(r, 200));
}


function getLowestBox(column)
{
    let width = 7;

    let toCheck;
    console.log(width + column);

    console.log(boxes);
}