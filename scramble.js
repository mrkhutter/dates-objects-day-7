var library = function(){
    
    function reverseString(itsAParameter){
        var newString = "";
        for(var i = itsAParameter.length; i > 0; i--){
            newString = newString + itsAParameter[i-1];
        }
        return newString;
    };

    function sumAllNumbers(arrayOfNumbers){
        var sum = 0;
        for(var i = 0; i < arrayOfNumbers.length; i++){
            sum = sum + arrayOfNumbers[i];
        }
        return sum;
    }

    return {
        reverseString: reverseString,
        sumAllNumbers: sumAllNumbers
    }
}();