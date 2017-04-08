module.exports = {
    fizzBuzz: function(num){

    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }

    else if(num % 3 == 0){
        return "Fizz";
    }

    else if(num % 5 == 0){
        return "Buzz";
    }

    else{
        return num;
    }

},

aritGeo: function (inputArray){
    var result = "";
    if(inputArray.length == 0){
        return 0;
    }

    if(inputArray.length <= 2){
        return inputArray;
    }

    else{
        for(var i = 2; i < inputArray.length - 1; i++){
            let a = inputArray[1] - inputArray[0];
            let r = inputArray[1] / inputArray[0];
            if((inputArray[i + 1] - inputArray[i]) === a){
                result = "Arithmetic"; 
            }
            else if((inputArray[i] / inputArray[i -1]) === r){
                result = "Geometric";
            }

            else{
                result = "-1"
                result = parseInt(result);
            }
         }
    }

    return result;
}

}