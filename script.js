let sentence ="always close watch put as never so write would air one picture learn song mountain spell she ask idea will air should give ";
let container = document.querySelector(".container");

//converrt the sentence to an array of words
let textArray = sentence.split(" ");

//add the text array to the dom
addToDom(textArray);

//listen to typed content
let index = 0;
let count =0;
// select the text we have to type ( returns text as a HTML collection)
let span = document.querySelectorAll(".container span");

//access the input tag,where we have to type
let intake = document.querySelector(".intake");

let firstTime = 0;
//add keyup event to the input tag
    intake.addEventListener('keyup', (e) =>{  
        firstTime +=1;      
        let text = e.target.value;
        // if space is encountered, reset e.target.value    
        if(e.code == "Space" ){ 
            intake.placeholder= "";
            text = text.trim(); // to remove space at the end of the text
            let arr = text.split(" ");            
            if( arr.length ==1 && text == textArray[index] ){
                e.target.value ="";
                span[index].style.backgroundColor="black";                
                index += 1;
                span[index].style.backgroundColor="grey";
                count += 1;
            }           
            if( arr.length>1){
                console.log(" arr length exceeds 1 : ",arr);
                for(let i =0 ; i<arr.length ; ++i){
                    if(arr[i] == textArray[index] ){
                        e.target.value ="";
                        span[index].style.backgroundColor="black";                
                        index += 1;
                        span[index].style.backgroundColor="grey";
                        count += 1;
                    }
                }
            }
            
            if(index == textArray.length-1){
                intake.disabled=true;
                clearInterval(time);
                // console.log(" the time is : ", timeCount);
                calculateSpeed(timeCount,count);
            }
                
        }        
        else if(textArray[index].indexOf(text) == 0){
            span[index].style.backgroundColor="green";
        }
        if(textArray[index].indexOf(text) != 0  ){ 
            span[index].style.backgroundColor="grey";            
        }        
        if(firstTime==1)
            timing();
    });
let timeCount = 0;
let time;
function timing(){
    time = setInterval(function(){
        timeCount +=1;
    },1000);
}
function calculateSpeed(second,wordTyped){
    let fraction = 60/second;
    let speed = Math.ceil(wordTyped*fraction);
    console.log(" second : ",second," wordtyped : ",wordTyped," speed : ",speed," WPM");
    document.querySelector(".demo").innerHTML=" Your Speed : "+speed+"wpm";
    document.querySelector(".speed").style.display = "block";
    
}


//function to add text array to dom
function addToDom(textArray){   
    for( let i=0; i< textArray.length ; i++){
        let span = document.createElement("span");
        span.textContent = textArray[i] + " ";
        container.appendChild(span);
    }
}

// do not allow to copy the text in the container 
container.addEventListener("copy", function(evt){
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
   
    // Prevent the default copy action
    evt.preventDefault();
  }, false);