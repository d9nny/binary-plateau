var binaryPlateau = function(number) {

	function convertToBinary() {
		if (number >= 0) {
			return number.toString(2);
		}
	}

	function findLargestPlateau(binaryString) {
		var ones = 0, count = 0, i;
		for(i=0; i <= binaryString.length; i++) {
			if (binaryString[i] === '1') {
				count++;
			} else {
				if (count > ones) {
					ones = count;
				}
				count = 0;
			}
		}
	return ones;		
	}

	return findLargestPlateau(convertToBinary());

};
