console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
//My Notes
// need to determin if the user inputed an ending scene
//while(currentPage !== null)
//loop to find if Ending pages and return true
//if not return false
//Use this function in your while loop to determine if the current page is an ending. 
//The function does not have to be created inside the loop (ideally, functions should not be created inside loops),
// but the function should be called somewhere inside the loop (calling functions inside loops is perfectly fine).
//Since your while loop ends if currentPage is null, assign null to the current page, and your loop will end on the next iteration.
//If the page is not an ending, then use prompt() add to the end  \n What page would you like to go to?
//Assign whatever gets returned by prompt to the currentPage variable.
//currentPage = prompt(text)
//if (currentPage !== null) {
//   currentPage = parseInt(currentPage);}

let flavorText = "\n What page would you like to go to ? "
let endingText = "<b> THE END or is it ....</b>"
document.write(`<p>${pages[currentPage]} </P>`)

function ending(currentPage) {
    let turnPage = "<b> you turn to page " + currentPage + "!</b>"
    currentPage = parseInt(currentPage);
    document.write(turnPage)
    document.write(`<p> ${pages[currentPage]} </p>>`)
    for (let index = 0; index < endingPages.length; index += 1) {
        const element = endingPages[index];

        if (currentPage === element) {
            return true

        }
    }
    return false
}


while (currentPage !== null) {
    currentPage = prompt(pages[currentPage] + flavorText)

    if (ending(currentPage) === true) {
        currentPage = null

    }
}

document.write(endingText)

