$(document).ready(function(){

    // creating an object
    var kelsey = {
        age: 46,
        hairColor: "brown",
        position: "kick@$$",
        friends: ["david", "mark", "claire"],
        imBroke: function(){return "Money Plz"}
    }

    console.log("how old is kelsey? " + kelsey.age);
    console.log("how many friends does kelsey have? " + kelsey.friends.length);
    console.log("who is kelsey's oldest friend? " + kelsey.friends[1]);
    console.log("what do we all need more of? " + kelsey.imBroke());
    
    var $theList = $("#theList");
    var sampleArray = ["apple", "pear", "banana"];
    var initialArrayLength = sampleArray.length;
    var currentArrayLength = sampleArray.length;

    var $arrayLengthDiv = $("#arrayLength");
    var $initialArrayLengthDiv = $("#initialArrayLength");
    var $matchChangeDiv = $("#mathChange");
    
    console.log("this is the current length of the array on load: " + initialArrayLength);
    
    $arrayLengthDiv.text(initialArrayLength);
    $initialArrayLengthDiv.text(initialArrayLength);

    var mathChangeResult = sillyLittleEquationWeDidInClass();
    $matchChangeDiv.text("math change result: " + mathChangeResult);

    for(var i = 0; i < sampleArray.length; i++){
        $theList.append("<li>" + sampleArray[i] + "</li>");
    }
    
    $("#arrayAction").click(function(){
        // var poppedValue = sampleArray.pop();
        var shiftedValue = sampleArray.shift();
        $("#popItem").text("this is the value: " + shiftedValue);
        currentArrayLength = sampleArray.length; 
        $arrayLengthDiv.text(currentArrayLength);
        var someVarName = sillyLittleEquationWeDidInClass();
        $matchChangeDiv.text(someVarName);
        $matchChangeDiv.text(sillyLittleEquationWeDidInClass());       
    });

    function sillyLittleEquationWeDidInClass(){
        return (initialArrayLength * 2) + currentArrayLength;
    }

});