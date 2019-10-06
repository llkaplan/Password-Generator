// buttons
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');
// password related
var passwordChanged = document.getElementById('password');

var passwordSecure = 'password';


/*For first pop-up */
generateBtn.addEventListener("click", function firstPopup(){
    event.preventDefault();
    var numbersQuestion = confirm("Do you want numbers?");
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

});