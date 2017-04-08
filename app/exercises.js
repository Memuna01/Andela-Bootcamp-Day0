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
    },

    getPrimes: function(n) {
        //checking for edge cases and invalid inputs
        if(isNaN(n)){
            return "invalid input";
        }

        if(n <= 1){
            return "invalid input";
        }

        if(n == 2){
            return num;
        }

        // Eratosthenes algorithm to find all primes under n
        var sieveArray = []; 
        var upperLimit = Math.sqrt(n);
        var resultArray = [];
        //get array of true values as a sieve
        for (var i = 0; i < n; i++) {
            sieveArray.push(true);
        }

        // Remove multiples of primes starting from 2, 3, 5,...
        for (var i = 2; i <= upperLimit; i++) {
            if (sieveArray[i]) {
                for (var j = i * i; j < n; j += i) {
                    sieveArray[j] = false;
                }
            }
        }

        // All array[i] set to true are primes
        for (var i = 2; i < n; i++) {
            if(sieveArray[i]) {
                resultArray.push(i);
            }
        }

        return resultArray;
    }
}