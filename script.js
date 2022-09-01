console.log('connected');

const body = document.body;

// initilization 


const values = document.querySelectorAll(".values");


const displayBoxes= document.querySelectorAll(".displayBoxes");

const calculations = document.querySelectorAll(".calculations");


const container = document.querySelector(".grid-container");

const clearBtn = document.querySelector(".grid-box1");

const divBtn = document.querySelector(".grid-box2");
const mulBtn = document.querySelector(".grid-box3");
const minusBtn = document.querySelector(".grid-box4");

const seven = document.querySelector(".grid-box5");
const eight = document.querySelector(".grid-box6");
const nine = document.querySelector(".grid-box7");

const four = document.querySelector(".grid-box9");
const five = document.querySelector(".grid-box10");
const six = document.querySelector(".grid-box11");

const one = document.querySelector(".grid-box12");
const two = document.querySelector(".grid-box13");
const three = document.querySelector(".grid-box14");


const plus = document.querySelector(".grid-boxPlus");
const enter = document.querySelector(".grid-boxEnter"); 
const zero = document.querySelector(".grid-boxZero");

const displayArea = document.querySelector(".grid-textArea");

const numbersArea = document.querySelector("strong");

var displayAreaStrong = document.querySelector(".displayAreaStrong");

var numbersAreaStrong = document.querySelector(".numbersAreaStrong");





var finalResult = document.querySelector(".finalResult");

var strong = document.createElement("strong");







var calculationsArray=[];

var displayStr=""
var numberStr="" ;

var calculationSymbol="";


// Event Listeners  


values.forEach(div=>{
    div.addEventListener("click",()=>{
        // console.log(div.textContent);
        numberStr=numberStr+div.textContent;
        displayStr+=div.textContent;
        // console.log(numberStr);
        // var strong = document.createElement("strong");
        // strong.innerText = div.textContent;
        // numbersArea.append(strong);
        
        // var numbersAreaStrong = document.querySelector(".numbersAreaStrong");
        numbersAreaStrong.innerText = numberStr;
        


    })
})


// clear

// selection of area message when clear is clicked before selected 

// clearBtn.addEventListener("click",()=>{
//     alert("please select the area which is to be cleared ")
// })


displayBoxes.forEach(div1=>{
    div1.addEventListener("click",()=>{
        
        

        if(div1.id === "numberId"){
            console.log("number");
            // event listener for the clear of number display

            clearBtn.addEventListener("click",()=>{
                displayStr=displayStr.replace(numberStr,""); 
                
                numberStr="";  // flushing the values of the numbers .
                console.log("passed here ")
                numbersAreaStrong.innerText = numberStr;
                console.log(numberStr,"  number after clicking ")
                // console.log(a.replace(b,""))
                console.log(displayStr,"  after clicking ");

                // removing the last coming elements from the array 
                var temp = calculationsArray[-1]
                calculationsArray.pop(temp);
                console.log(calculationsArray ,"checking stage ");

                
                // removing the finalResult;  as welll - 
                strong.innerText = ""
                finalResult.append(strong)




            })
        }
        else if(div1.id === "displayId"){
            clearBtn.addEventListener("click",()=>{
                console.log("display")
                displayStr="";
                displayAreaStrong.innerText = displayStr;
                calculationsArray=[] // emptying calculations array 
                console.log(calculationsArray)


                strong.innerText = ""
                finalResult.append(strong)

            })

        }
    });
});


function calculator(calculationsArray){
    
    if(calculationsArray[1] === "+"){
        if(calculationsArray.length === 2){
            return parseFloat(calculationsArray[0]);
            
        }

        var answer = parseFloat(calculationsArray[0]) + parseFloat(calculationsArray[2]);
        
        // currently this will work with only two variables only it reps the last final answer after solving the array 
        calculationsArray=[answer]

        console.log(calculationsArray)
        return answer
    }
    
    else if(calculationsArray[1] === "-"){
        if(calculationsArray.length === 2){
            return parseFloat(calculationsArray[0]);
        }
        var answer = parseFloat(calculationsArray[0]) - parseFloat(calculationsArray[2]);
        calculationsArray=[answer]
        console.log(calculationsArray)
        return answer
    } 

    else if(calculationsArray[1] === "*"){
        if(calculationsArray.length === 2){
            return parseFloat(calculationsArray[0]);
        }
        var answer = parseFloat(calculationsArray[0]) * parseFloat(calculationsArray[2]);
        calculationsArray=[answer]
        console.log(calculationsArray)
        return answer
    } 
    

    else if(calculationsArray[1] === "/"){
        if(calculationsArray.length === 2){
            return parseFloat(calculationsArray[0]);
        }
        var answer = parseFloat(calculationsArray[0]) / parseFloat(calculationsArray[2]);
        calculationsArray=[answer]
        console.log(calculationsArray)
        return answer
    } 
    
}




enter.addEventListener("click",()=>{
    
    // storing  the number in the array 
    calculationsArray.push(numberStr);
    console.log(calculationsArray)



    displayAreaStrong.innerText = displayStr;
    numbersAreaStrong.innerText=numberStr;
    console.log(displayStr)
    numberStr="";  // so that number section gets new value every time enter is pressed  


    // finalResult processing 
    
    strong.innerText = calculator(calculationsArray);
    finalResult.append(strong)
    
    // removing the processed elements from the list as they are already processed


})



// calculations  

calculations.forEach(div=>{
    
    div.addEventListener("click",()=>{
        if(div.innerText === "+"){
            calculationSymbol="+"
            calculationsArray.push(calculationSymbol);
        }
    })

})

// calculator functions 




// results window 





