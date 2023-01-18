// Var
// var testWord = "Pneumonoultramicroscopicsilicovolcanoconiosis"
var testWords = ["Pneumonoultramicroscopicsilicovolcanoconiosis", "Developer"];
var currentOption = null;
var currentWord = '';

// Helpers
String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
}


// Code
const changeButton = (success = false, defaultColour = false) => {
  var node = document.getElementById('editable');
  if (defaultColour) {
    node.style.borderColor = "black";
  } else {
    node.style.borderColor = success ? "green" : "red";
  }
}
const changeText = (success = false, defaultBeh = false) => {
  var node = document.getElementById('btn');
  if (defaultBeh) {
    node.textContent = "Submit";
  } else {
    node.textContent = success ? "Correct" : "Incorrect";
  }
}


const onEdit = (e) => {
  changeButton(false, true);
  changeText(false, true);
}

const checkWord = () => {
  var node = document.getElementById('editable');
  var textContent = node.value;
  var testWord = currentWord;
  console.log(textContent)
  var success = textContent.toLowerCase().trim() === testWord.toLowerCase().trim();
  changeButton(success);
  changeText(success);
}

const codifyWord = (word) => {
var asteriks = word.replaceAll(/(?<=\w{2,})\w/g, '*');
return asteriks.replaceAt(word.length - 1, word[word.length - 1]);
}

// Dynamically add array
const addOptions = () => {
  const list = document.querySelector('#wordSelections')

  testWords.forEach(word => {
    // Create project
    const option = document.createElement('div')
    option.onclick = () => onOptionClick(option, word);
  	option.appendChild(document.createTextNode(codifyWord(word)));
    option.className = "option";

    // Create content like titles and text
    // Add element to list
    list.appendChild(option);
  })
}

const onOptionClick = (option, word) => {
if (currentOption !== null) {
currentOption.style.borderColor = "orange"
}
option.style.borderColor = "black";
currentOption = option;
currentWord = word;
}



// On page load
document.addEventListener("DOMContentLoaded", function(event) {
    // Event handlers
    const source = document.getElementById('editable');
    source.addEventListener('input', onEdit);

    // Add options
    addOptions();
});
