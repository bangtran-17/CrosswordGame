function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BvOcF6Q8GU":
        Script1();
        break;
  }
}

function Script1()
{
  var slideLayer = document.querySelector('.slide-layer.base-layer.shown').children;
var table=[];
var table1=[];
var textPoint= document.querySelector("[data-model-id='6UY3G46wd3M']").children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0]
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
        var matrix = Array.from({ length: numRows }, () => Array(numCols).fill(''));

       
        function placeWordInMatrix(word, matrix) {
            var placed = false;

            while (!placed) {
               
                var direction = Math.floor(Math.random() * 3);

                if (direction === 0) {
                    // Place horizontally (left to right)
                    var row = Math.floor(Math.random() * numRows);
                    var col = Math.floor(Math.random() * (numCols - word.length));

                    // Check if space is available
                    var canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        if (matrix[row][col + i] !== '') {
                            canPlace = false;
                            break;
                        }
                    }

                    // Place the word if space is free
                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            matrix[row][col + i] = word[i];
                        }
                        placed = true;
                    }

                } else if (direction === 1) {
                    // Place vertically (top to bottom)
                    var row = Math.floor(Math.random() * (numRows - word.length));
                    var col = Math.floor(Math.random() * numCols);

                    // Check if space is available
                    var canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        if (matrix[row + i][col] !== '') {
                            canPlace = false;
                            break;
                        }
                    }

                    // Place the word if space is free
                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            matrix[row + i][col] = word[i];
                        }
                        placed = true;
                    }

                } else if (direction === 2) {
                    // Place diagonally (top-left to bottom-right)
                    var row = Math.floor(Math.random() * (numRows - word.length));
                    var col = Math.floor(Math.random() * (numCols - word.length));

                    // Check if space is available
                    var canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        if (matrix[row + i][col + i] !== '') {
                            canPlace = false;
                            break;
                        }
                    }

                    // Place the word if space is free
                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            matrix[row + i][col + i] = word[i];
                        }
                        placed = true;
                    }
                }
            }
        }
        console.log(matrix)
        // Place all words into the matrix
        SelectedKeytext.forEach(word => placeWordInMatrix(word, matrix));
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

    document.addEventListener('mousemove', function(event) {
    var cursorX = event.clientX; // X position relative to the viewport
    var cursorY = event.clientY; // Y position relative to the viewport
   
document.onmousedown = function() {
        isMouseDown = true;
        var Rectangles = rectangles;
        
        Rectangles.forEach(Rectangle => {
            if(isCursorInRectangle(Rectangle,cursorX,cursorY) && Rectangle.getAttribute("fill") == "#D99694" ) {
            Rectangle.style.fill = "#c30010";
     keyArray1.push(tableMap.get(Rectangle.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0])
            keyArray.push(Rectangle)
            keyText=keyText+Rectangle.parentNode.parentNode.children[1].children[0].children[0].children[0].children[0].textContent
  tableMap.get(Rectangle.parentNode.parentNode.parentNode.parentNode.parentNode).children[0].children[0].children[0].children[0].children[0].style.fill="#c30010";

            console.log(keyText)
            }
        });
        document.onmousedown=null
            }
    // When the mouse button is released anywhere on the document
    document.onmouseup = function() {
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
point ++;
console.log(point)
textPoint.textContent=point
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

