// buttons
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');
// password related
var passwordChanged = document.getElementById('password');

var passwordSecure = 'password';


/*For first pop-up */
generateBtn.addEventListener("click", function generatingPW(){
    event.preventDefault();
    var numbersQuestion = confirm("Do you want numbers? (e.g. 3)");
    numbersQuestion;
    
    if (numbersQuestion = confirm){

        var numbersPrompt = prompt("How many numbers would you want? Between 1 and 10");
        var numberOfNums = parseInt(numbersPrompt);

        if (numberOfNums > 0 && numberOfNums < 11) {

            function makeId() {
                var result = '';
                var nums = '0123456789';
                var numsLength = nums.length;
                for (var i = 0; i < numberOfNums; i++) {
                   result += nums.charAt(Math.floor(Math.random() * numsLength));
                }     
                return result;
             }
             var numsPW = makeId(numberOfNums);
             console.log(numsPW);
        } else {
            alert('you need to select a number between 1 and 10');
        }

    } else {return}


    var uppercaseQuestion = confirm("Do you want uppercase letters? (e.g. D)");
    uppercaseQuestion;


    if (uppercaseQuestion = confirm) {

        var UCPrompt = prompt("How many uppercase letters would you want? Between 1 and 5");
        numbersPrompt;
        var numberOfUC = parseInt(UCPrompt);

        if (numberOfUC > 0 && numberOfUC < 6) {

        function makeUC(){
            var result = '';
            var uLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var uLettersLength = uLetters.length;
            for (var i = 0; i < numberOfUC; i++) {
               result += uLetters.charAt(Math.floor(Math.random() * uLettersLength));
            }     
            return result;
         }
         var uppercasePW = makeUC(numberOfUC);
         console.log(uppercasePW);
    }} else {return}


    var lowercaseQuestion = confirm("Do you want lowercase letters? (e.g. p)");
    lowercaseQuestion;

    if (lowercaseQuestion = confirm) {

        var LCPrompt = prompt("How many lowercase letters would you want? Between 1 and 5");
        numbersPrompt;
        var numberOfLC = parseInt(LCPrompt);

        if (numberOfLC > 0 && numberOfLC < 6) {

        function makeLC(){
            var result = '';
            var lLetters = 'abcdefghijklmnopqrstuvwxyz';
            var lLettersLength = lLetters.length;
            for (var i = 0; i < numberOfLC; i++) {
               result += lLetters.charAt(Math.floor(Math.random() * lLettersLength));
            }     
            return result;
         }
         var lowercasePW = makeLC(numberOfLC);
         console.log(lowercasePW);
    }} else {return}

    var specialCharQuestion = confirm("Do you want special characters (e.g. @)?");
    specialCharQuestion;

    if (specialCharQuestion = confirm) {

        var SCPrompt = prompt("How many special characters would you want? Between 1 and 3");
        numbersPrompt;
        var numberOfSC = parseInt(SCPrompt);

        if (numberOfSC > 0 && numberOfSC < 4) {

        function makeSC(){
            var result = '';
            var sLetters = '!@#$%^&*()_-|?<>/~';
            var sLettersLength = sLetters.length;
            for (var i = 0; i < numberOfSC; i++) {
               result += sLetters.charAt(Math.floor(Math.random() * sLettersLength));
            }     
            return result;
         }
         var specialCharPW = makeSC(numberOfSC);
         console.log(specialCharPW);
    }} else {return}



});