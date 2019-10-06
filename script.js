// buttons
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');
// password related
var passwordChanged = document.getElementById('password');

//For first pop-up
generateBtn.addEventListener("click", function firstPopup(){
    var numbersQuestion = confirm("Do you want numbers?");
    numbersQuestion;
    
    if (numbersQuestion = true){

        var numberPW = (Math.floor(math.random() * 10));

        numberPW.textContent = passwordChanged;


    } else {}

    var lowercaseQuestion = confirm("Do you want lowercase letters?");
    lowercaseQuestion;

    if (lowercaseQuestion = true) {
        var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        var lCLettersSplit = lowerCaseLetters.split('');


    }

});



console.log(getRandomInt(numbersSplit.length))