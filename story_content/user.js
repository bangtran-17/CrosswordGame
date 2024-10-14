function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qICLI2wKkk":
        Script1();
        break;
      case "6UukdHq1tIw":
        Script2();
        break;
      case "5npbvKaM89b":
        Script3();
        break;
      case "6DeRS3relM5":
        Script4();
        break;
      case "60uZB89cQEH":
        Script5();
        break;
      case "5eSSWN5S1V2":
        Script6();
        break;
      case "6W7Zq7BLzl4":
        Script7();
        break;
  }
}

function Script1()
{
    document.ontouchstart=function(){
       alert('Game này chưa hỗ trợ trên mobile, vui lòng truy cập bằng máy tính nhé')
     
     }
}

function Script2()
{
  var input = document.getElementsByClassName("text-input-6riNxYtKayZ")[0].children[1].value
}

function Script3()
{
  let lastTouchedElement = null;

// Helper function to trigger mouse enter
function triggerMouseEnter(element, touchEvent) {
  const mouseEvent = new MouseEvent('mouseenter', {
    bubbles: true,
    cancelable: true,
    clientX: touchEvent.changedTouches[0].clientX,
    clientY: touchEvent.changedTouches[0].clientY
  });

  element.dispatchEvent(mouseEvent);
}

// Function to handle touchmove and simulate mouseenter
function handleTouchMove(e) {
  const touch = e.changedTouches[0];
  const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);

  if (elementUnderTouch !== lastTouchedElement) {
    if (lastTouchedElement) {
      // Trigger mouseleave if needed
      const mouseLeaveEvent = new MouseEvent('mouseleave', {
        bubbles: true,
        cancelable: true,
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      lastTouchedElement.dispatchEvent(mouseLeaveEvent);
    }
    
    // Trigger custom mouseenter
    if (elementUnderTouch) {
      triggerMouseEnter(elementUnderTouch, e);
    }

    // Update last touched element
    lastTouchedElement = elementUnderTouch;
  }
}

// Add event listeners
document.addEventListener('touchstart', function(e) {
  const touch = e.changedTouches[0];
  lastTouchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
  triggerMouseEnter(lastTouchedElement, e);
}, { passive: false });

document.addEventListener('touchmove', function(e) {
  handleTouchMove(e);
}, { passive: false });

document.addEventListener('touchend', function(e) {
  lastTouchedElement = null;
}, { passive: false });




//-------------------------
var slideLayer = document.querySelector('.slide-layer.base-layer.shown').children;
var table=[];
var table1=[];
let player=GetPlayer()
point1 = player.GetVar("Point")
//var textPoint= document.querySelector("[data-model-id='6UY3G46wd3M']").children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0]
var point=0;

for(var i =6;i<106;i++){
    table.push(slideLayer[i])
}
for(var i =106;i<206;i++){
    table1.push(slideLayer[i])
}
function getRandomWord() {
        var letters = 'ABCDEFGHIKLMNOPQRSTUVWZY';
        return   letters[Math.floor(Math.random() * 16)];
    }
    const tableMap= new Map()
function isOverlapping(div1, div2) {
            const rect1 = div1.getBoundingClientRect();
            const rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                     rect1.left > rect2.right || 
                     rect1.bottom < rect2.top || 
                     rect1.top > rect2.bottom);
        }
    for(var i =0;i<table.length;i++){
        for(var z =0;z<table1.length;z++){
            if(isOverlapping(table1[z],table[i])){
                tableMap.set(table1[z],table[i])
                console.log(i + "true")
                break
            }
    }
    }

 var SelectedKeytext = ['SIXSIGMA', 'KAIZEN', 'TRAMSANG','XUATSAC','TRUCOT','TRUCQUAN','WORKSHOP','CONGCU','LEAN','LANGPHI'];

    
        var numRows = 10;
        var numCols = 10;
        // var matrix = Array.from({ length: numRows }, () => Array(numCols).fill(''));

       
   // function placeWordInMatrix(word, matrix) {
        //     var placed = false;
        
        //     while (!placed) {
        //         // Choose a random direction (0: horizontal, 1: vertical, 2: diagonal top-left to bottom-right,
        //         // 3: diagonal bottom-right to top-left, 4: right to left, 5: bottom to top)
        //         var direction = Math.floor(Math.random() * 8);
        
        
        //         if (direction === 0) {
        //             // Place horizontally (left to right)
        //             var row = Math.floor(Math.random() * numRows);
        //             var col = Math.floor(Math.random() * (numCols - word.length));
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row][col + i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row][col + i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 1) {
        //             // Place vertically (top to bottom)
        //             var row = Math.floor(Math.random() * (numRows - word.length));
        //             var col = Math.floor(Math.random() * numCols);
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row + i][col] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row + i][col] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 2) {
        //             // Place diagonally (top-left to bottom-right)
        //             var row = Math.floor(Math.random() * (numRows - word.length));
        //             var col = Math.floor(Math.random() * (numCols - word.length));
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row + i][col + i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row + i][col + i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 3) {
        //             // Place diagonally (bottom-right to top-left)
        //             var row = Math.floor(Math.random() * (numRows - word.length)) + word.length - 1;
        //             var col = Math.floor(Math.random() * (numCols - word.length)) + word.length - 1;
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row - i][col - i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row - i][col - i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 4) {
        //             // Place horizontally (right to left)
        //             var row = Math.floor(Math.random() * numRows);
        //             var col = Math.floor(Math.random() * (numCols - word.length)) + word.length - 1;
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row][col - i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row][col - i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 5) {
        //             // Place vertically (bottom to top)
        //             var row = Math.floor(Math.random() * (numRows - word.length)) + word.length - 1;
        //             var col = Math.floor(Math.random() * numCols);
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row - i][col] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row - i][col] = word[i];
        //                 }
        //                 placed = true;
        //             }
        //         }
        // else if (direction === 6) {
        //             // Place diagonally (bottom-left to top-right)
        //             var row = Math.floor(Math.random() * (numRows - word.length)) + word.length - 1;
        //             var col = Math.floor(Math.random() * (numCols - word.length));
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row - i][col + i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row - i][col + i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        
        //         } else if (direction === 7) {
        //             // Place diagonally (top-right to bottom-left)
        //             var row = Math.floor(Math.random() * (numRows - word.length));
        //             var col = Math.floor(Math.random() * (numCols - word.length)) + word.length - 1;
        
        //             var canPlace = true;
        //             for (let i = 0; i < word.length; i++) {
        //                 if (matrix[row + i][col - i] !== '') {
        //                     canPlace = false;
        //                     break;
        //                 }
        //             }
        
        //             if (canPlace) {
        //                 for (let i = 0; i < word.length; i++) {
        //                     matrix[row + i][col - i] = word[i];
        //                 }
        //                 placed = true;
        //             }
        //         }
        //     }
        // }
        
        //         // Place all words into the matrix
        //         SelectedKeytext.forEach(word => placeWordInMatrix(word, matrix));

const matrix = [
['', '', '', '', '', '', 'T', '', 'T', ''],
    ['S', '', '', '', '', '', 'R', '', 'R', ''],
    ['I', 'K', 'L', '', '', '', 'U', '', 'U', 'P'],
   ['X', 'U', 'A', 'T', 'S', 'A', 'C', '', 'C', 'O'],
    ['S', '', 'N', 'I', '', '', 'O', '', 'Q', 'H'],
    ['I', '', 'G', '', 'Z', 'L', 'T', '', 'U', 'S'],
    ['G', '', 'P', '', '', 'E', '', '', 'A', 'K'],
    ['M', '', 'H', '', '', 'A', 'N', '', 'N', 'R'],
   ['A', '', 'I', 'C', 'O', 'N', 'G', 'C', 'U', 'O'],
    ['T', 'R', 'A', 'M', 'S', 'A', 'N', 'G', '', 'W']
  ];
var stringifiedMatrix = JSON.stringify(matrix);
player.SetVar("TextEntry1",stringifiedMatrix)
console.log(stringifiedMatrix )
console.log(matrix)
 function placeMatrixInDivs(matrix, divArray) {
            let index = 0; // This will map the 2D matrix to the 1D div array
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    // Assign the text content of the matrix to the div
                     console.log(matrix[row][col])
                    divArray[index].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent = (matrix[row][col]=='') ?  getRandomWord() : matrix[row][col];
                    index++;
                }
            }
        }
        placeMatrixInDivs(matrix, table);
        for(const key of tableMap.keys()){
              key.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent= tableMap.get(key).children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent
}



//----------------

let keyArray=[];
let keyArray1=[]
var rectangles=[];
var rectanglesText=[];
var isMouseDown = false;
var increment =0;
   var keyText="";
for(var i =106;i<206;i++){
    rectangles.push(slideLayer[i].children[0].children[0].children[0].children[0].children[0])
}
     for(var i =106;i<206;i++){
    rectanglesText.push(slideLayer[i].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0])
}

console.log(rectanglesText)
function isCursorInRectangle(rectElement, cursorX, cursorY) {
    // Get the rectangle's position and dimensions
    var rect = rectElement.getBoundingClientRect();
   
    // Check if the cursor is inside the rectangle
    return cursorX >= rect.left && cursorX <= rect.right && cursorY >= rect.top && cursorY <= rect.bottom;
};
function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    document.ontouchstart=function(){
        fetch('https://prod-45.southeastasia.logic.azure.com:443/workflows/aa96747f205c4500b89b561b53f3c908/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=KbXcNYMalGYE8Df7OnafeNnvhxCw01k8pWpFQK-9D3Q', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_Email: "end", point: 30,sophut:10,sogiay:10 })
          })
        
     
     }
    document.addEventListener('pointermove', function(event) {
    var cursorX = event.clientX; // X position relative to the viewport
    var cursorY = event.clientY; // Y position relative to the viewport
  
document.onpointerdown = function() {
        isMouseDown = true;
        var Rectangles = rectangles;
        
        Rectangles.forEach(Rectangle => {
            if(isCursorInRectangle(Rectangle,cursorX,cursorY) ) {
            if(Rectangle.getAttribute("fill") == "#D99694"){
            Rectangle.style.fill = "#c30010";
  tableMap.get(Rectangle.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0].style.fill="#c30010";
}
     keyArray1.push(tableMap.get(Rectangle.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0])
            keyArray.push(Rectangle)
            keyText=keyText+Rectangle.parentNode.parentNode.children[1].children[0].children[0].children[0].children[0].textContent


            console.log(keyText)
            }
        });
        document.onmousedown=null
            }
    // When the mouse button is released anywhere on the document
    document.onpointerup = function() {
        isMouseDown = false;
        increment=0;
   var flag=0;
        if( SelectedKeytext.includes(keyText)){
            console.log('true');
            randomColor=getRandomColor()
            keyArray.forEach(function(key) {
        key.style.fill = randomColor 
       key.setAttribute("fill",randomColor)
flag=1;
    });
         keyArray1.forEach(function(key) {
        key.style.fill = randomColor 
        key.setAttribute("fill",randomColor)
    });
        }else{
            

            keyArray.forEach(function(key) {
if(key.style.fill =="rgb(195, 0, 16)" ||  key.style.fill ==""){
        key.style.fill = "#D99694";  
}
    });
         keyArray1.forEach(function(key) {
    if(key.style.fill =="rgb(195, 0, 16)" ||  key.style.fill ==""){
        key.style.fill = "#D99694";  
}
    });

        }
        keyText="";
        keyArray=[]
      keyArray1=[]
   if(flag==1){
point +=10;
player.SetVar("Point",point)
player.SetVar("NumericEntry5",point)
console.log(point)
//textPoint.textContent=point
}

};
   

    // Function to increment the Storyline variable "variableTest"
    function incrementVariable() {
        if (isMouseDown) {

        } else{
            increment=0;

        }
    }
    rectangles.forEach(function(rect, index) {  
        rect.hasEntered = false; // Custom flag for each rectangle
        // Add mouseenter event listener to each rectangle
        rect.transform="scale(0.5, 0.5)"
        rect.addEventListener('mouseenter', function() {
            if(!rect.hasEntered && isMouseDown ){
              
                rect.hasEntered = true; // Mark as entered
                keyArray.push(rect)
                keyArray1.push(tableMap.get(rect.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0])
                keyText=keyText+rect.parentNode.parentNode.children[1].children[0].children[0].children[0].children[0].textContent
                console.log(keyArray)
if(rect.style.fill =="rgb(217, 150, 148)" ||  rect.style.fill ==""){
 console.log(rect.style.fill)
            rect.style.fill = "#c30010";  // Change the color
         tableMap.get(rect.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0].style.fill="#c30010";
}
            incrementVariable();
            }
            
        });
    });
});

}

function Script4()
{
  let player=GetPlayer()
email = player.GetVar("TextEntry").concat("@pnj.com.vn")
point = player.GetVar("Point")
minutes = player.GetVar("minutes")
seconds = player.GetVar("seconds")

        fetch('https://prod-45.southeastasia.logic.azure.com:443/workflows/aa96747f205c4500b89b561b53f3c908/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=KbXcNYMalGYE8Df7OnafeNnvhxCw01k8pWpFQK-9D3Q', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_Email: email, point: parseInt(point),sophut:parseInt(minutes) ,sogiay:parseInt(seconds) })
          })
}

function Script5()
{
  let player=GetPlayer()
var matrix1 = player.GetVar("TextEntry1");
console.log("ma tran")
console.log(matrix1)
var parsedMatrix = JSON.parse(matrix1);

console.log('Parsed matrix:', parsedMatrix);

var slideLayer = document.querySelector('.slide-layer.base-layer.shown').children;
var table=[];
var table1=[];
point1 = player.GetVar("Point")

for(var i =0;i<100;i++){
    table.push(slideLayer[i])
}
console.log(table)
for(var i =100;i<200;i++){
    table1.push(slideLayer[i])
}

    const tableMap= new Map()
function isOverlapping(div1, div2) {
            const rect1 = div1.getBoundingClientRect();
            const rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                     rect1.left > rect2.right || 
                     rect1.bottom < rect2.top || 
                     rect1.top > rect2.bottom);
        }
    for(var i =0;i<table1.length;i++){
        for(var z =0;z<table.length;z++){
            if(isOverlapping(table[z],table1[i])){
                tableMap.set(table[z],table1[i])
                console.log(i + "true")
                break
            }
    }
    }
function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
 var SelectedKeytext = ['SIXSIGMA', 'KAIZEN', 'TRAMSANG','XUATSAC','TRUCOT','TRUCQUAN','WORKSHOP','CONGCU','LEAN','LANGPHI'];

 function placeMatrixInDivs(matrix, divArray) {
            let index = 0; // This will map the 2D matrix to the 1D div array
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    // Assign the text content of the matrix to the div
                     console.log(matrix[row][col])
                  divArray[index].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent =  matrix[row][col];
                    index++;
                }
            }
        }
        placeMatrixInDivs(parsedMatrix, table);
       for(const key of tableMap.keys()){
tableMap.get(key).children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent=key.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].textContent
}
function findKeywordInMatrix(matrix, keyword) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const keywordLength = keyword.length;

    // Directions for (row, col) movements: right, down, bottom-right, top-right, left, up, bottom-left, top-left
    const directions = [
        { x: 0, y: 1 },   // right
        { x: 1, y: 0 },   // down
        { x: 1, y: 1 },   // bottom-right
        { x: -1, y: 1 },  // top-right
        { x: 0, y: -1 },  // left
        { x: -1, y: 0 },  // up
        { x: 1, y: -1 },  // bottom-left
        { x: -1, y: -1 }  // top-left
    ];

    function isInBounds(row, col) {
        return row >= 0 && row < numRows && col >= 0 && col < numCols;
    }

    function searchFrom(row, col) {
        // Check all directions
        for (let d = 0; d < directions.length; d++) {
            let found = true;
            const direction = directions[d];
            let positions = [];

            for (let i = 0; i < keywordLength; i++) {
                const newRow = row + i * direction.x;
                const newCol = col + i * direction.y;

                if (!isInBounds(newRow, newCol) || matrix[newRow][newCol] !== keyword[i]) {
                    found = false;
                    break;
                }
                positions.push({ row: newRow, col: newCol });
            }

            if (found) {
                highlightKeyword(positions);
                return true;  // Stop once the keyword is found
            }
        }
        return false;
    }

    // Iterate through the entire matrix
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === keyword[0]) {
                if (searchFrom(row, col)) {
                    return;  // Stop once the keyword is found
                }
            }
        }
    }
}

// Highlight the found keyword by adding a CSS class
function highlightKeyword(positions) {
    var Color1=getRandomColor()
    positions.forEach(pos => {
         let index = 0; // This will map the 2D matrix to the 1D div array
            for (let row = 0; row < parsedMatrix.length; row++) {
                for (let col = 0; col < parsedMatrix[row].length; col++) {
                     console.log(parsedMatrix[row][col])
                    if(row==pos.row && col==pos.col){
                  table[index].children[0].children[0].children[0].children[0].children[0].style.fill=Color1
tableMap.get(table[index]).children[0].children[0].children[0].children[0].children[0].style.fill=Color1;
                    


                    }
                    index++;
                }
            }
    })
}
SelectedKeytext.forEach(x=>findKeywordInMatrix(parsedMatrix,x))
console.log(tableMap)
}

function Script6()
{
  let player=GetPlayer()
var point = player.GetVar("Point");
player.SetVar("NumericEntry1",point)
player.SetVar("NumericEntry3",point/10)
}

function Script7()
{
  let player=GetPlayer()
 player.SetVar("Point",'0')
 player.SetVar("minutes",0)
 player.SetVar("seconds",0)
player.SetVar("NumericEntry5",0)

}

