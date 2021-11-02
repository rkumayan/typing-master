let sentence ="always close watch put as never so write would air one picture learn song mountain spell she ask idea will air shold give ";

let textArray = converSentenceToArray(sentence);
addToDom(textArray);


function addToDom(textArray){
    let container = document.querySelector(".container");
    for( let i=0; i< textArray.length ; i++){
        let span = document.createElement("span");
        span.textContent = textArray[i] + " ";
        container.appendChild(span);
    }
}

function converSentenceToArray(sentence){
    let word ="";
    let textArray = new Array();
    for(let i=0; i<sentence.length ; ++i){
        if( sentence[i] != " "){
            word += sentence[i];
        }
        else{
            textArray[textArray.length] = word;
            word = "";
        }
    }
    return textArray;
    console.log(" the text array is : " ,textArray);
}