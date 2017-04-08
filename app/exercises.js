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

aritGeo: function (arr){
    var result = "";
    if(arr.length == 0){
        return 0;
    }

    if(arr.length <= 2){
        return arr;
    }

    else{
        for(var i = 2; i < arr.length - 1; i++){
            let a = arr[1] - arr[0];
            let r = arr[1]/arr[0];
            if((arr[i + 1] - arr[i]) === a){
                result = "Arithmetic"; 
            }
            else if((arr[i] / arr[i -1]) === r){
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