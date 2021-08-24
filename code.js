var pythonArr = ["def","return","len","for","while","true","false","try","except","not","in","str","int","random","import","input","class","from","init","if","elif","else","do","range","append","print",
 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda',
 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield',"open","with","break","continue"];
var wordsArray = pythonArr;
var jsArr = ["break","continue","delete","undefind","default","finally","function","import","string","true","false","class","constructor","if","else","while","do","for","slice","push","new","var","let","const","try","catch","document","window","addEventListener","consolelog"];
var csArr = ["select","break","continue","int","string","float","parse","static","void","return","write","writeline","read","readline","console","do","while","for","foreach","in","double","try","catch","add"];
var wordsNotAllowed = [];
var programmingLanguage = "python";

function clearDivsValuesOfTheWhite(){
    for (let i = 0; i < 8; i++){
        document.getElementById("wordN" + String(i + 1)).textContent = "";
    }
}

var letterNumber = 0;
var numOfChar = 0;

document.getElementById("py").style.color = "rgb(226, 183, 20)";
function python(){
    if (programmingLanguage != "python"){
        programmingLanguage = "python";
        document.getElementById("py").style.color = "rgb(226, 183, 20)";
        document.getElementById("js").style.color = "black";
        document.getElementById("cs").style.color = "black";
        letterNumber = 0;
        numOfChar = 0;
        clearDivsValuesOfTheWhite();
        takeArg();
    }
}
function js(){
    if (programmingLanguage != "javascript"){
        programmingLanguage = "javascript";
        document.getElementById("py").style.color = "black";
        document.getElementById("js").style.color = "rgb(226, 183, 20)";
        document.getElementById("cs").style.color = "black";
        letterNumber = 0;
        numOfChar = 0;
        clearDivsValuesOfTheWhite();
        takeArg();
    }
}
function cs(){
    if (programmingLanguage != "cSharp"){
        programmingLanguage = "cSharp";
        document.getElementById("py").style.color = "black";
        document.getElementById("js").style.color = "black";
        document.getElementById("cs").style.color = "rgb(226, 183, 20)";
        letterNumber = 0;
        numOfChar = 0;
        clearDivsValuesOfTheWhite();
        takeArg();
    }
}
function wordAvailablity(word, wordsNotAllowed){
    for (let i = 0; i < wordsNotAllowed.length; i++){
        if (wordsNotAllowed[i] == word){
            return false;
        }
    }
    return true;
}
function takeArg(){
    wordsNotAllowed = [];
    if (programmingLanguage == "python") wordsArray = pythonArr;
    if (programmingLanguage == "javascript") wordsArray = jsArr;
    if (programmingLanguage == "cSharp") wordsArray = csArr;

    var randomWord = "";
    for (let i = 0; i < 8; i++){
        do{
            randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            document.getElementById("word" + String(i + 1)).textContent = randomWord;
        }while(!wordAvailablity(randomWord, wordsNotAllowed || randomWord == undefined));
        wordsNotAllowed.push(randomWord); 
    }
}
takeArg();


var keyPressed = undefined;
window.addEventListener("keydown", function(e){
    keyPressed = String.fromCharCode(e.keyCode).toLowerCase();
    var currentNeededChar = wordsNotAllowed[letterNumber][numOfChar];// the char that we want
    var word = this.document.getElementById("wordN" + String(letterNumber + 1)).textContent;  
    var completeWord = this.document.getElementById("word" + String(letterNumber + 1)).textContent;  
    var lastInWord = word[word.length - 1];
    if(e.keyCode == 32 && word == completeWord){
        numOfChar = 0;
        letterNumber ++;
    }
    if (e.keyCode == 8){
        if (numOfChar > 0){
            numOfChar -= 1;
        }
        this.document.getElementById("wordN" + String(letterNumber + 1)).textContent = word.slice(0, -1);
    }
    if (keyPressed == currentNeededChar){
        this.document.getElementById("error").textContent = "";
        this.document.getElementById("wordN" + String(letterNumber + 1)).textContent += keyPressed;
        if (word.length >= numOfChar) numOfChar ++;
    }
    if (keyPressed != currentNeededChar && e.keyCode != 32){
        this.document.getElementById("error").textContent = "oops, you got an error";
    }
    if (letterNumber >= 8){
        letterNumber = 0;
        numOfChar = 0;
        wordsNotAllowed = [];
        for (let i = 0; i < 8; i++){
            this.document.getElementById("wordN" + String(i + 1)).textContent = "";
        }
        takeArg();
    }
})