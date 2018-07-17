function BeanCount(word, character){
	var i = 0;
	var counted = 0;
	while (i < word.length){
		if(word[i] == character)
			counted++;
		i++;
	}
	return counted;
}

var word = "jdhdBldskhsudBlkduhBlkdB";
var counted = BeanCount(word, "B");