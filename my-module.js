function containsDigit(num,digit) {  //find the digit
    if(num == digit)
        return true;

    while(num > digit) {
        if(num % 10 == digit)
            return true;
        num /= 10;
    }
    return false;
}

exports.myFunction = function CountNumbers(n,d) {
	var numbersArray = [];  //empty array
	

	for(var i=0; i<=Math.pow(10,n); i++)  
	{
		
		numbersArray.push(i.toString()); ///each element from 0 to 10^n will be added in the empty array
		
		
	};
	console.log(numbersArray); //displaying the elements

	

	
	
var newArray = [];
	for(var i = 0; i<=numbersArray.length; i++){
		var hasDigit = containsDigit(i, d)

			if (hasDigit) {
    			newArray.push(i)
			}
			
		
	};

	console.log(newArray.length);

	
};