function methodSlice(arr, n, m){
	if (m === undefined ) {
		m = arr.length;
	}
	var mas = [];
	for (var i = 0; i < arr.length; i++){
		if (i >= n && i < m) {
			mas.push(arr[i]);
		}
	}
	console.log(mas);

}

methodSlice(["Почему", "надо", "учить", "JavaScript"], 1, 3)



// function filter(array, func2) {
// 	var mas = [];
// 	var k = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		if( func2(array[i]) ) {
// 			mas[k] = array[i];
// 		k++;
// 		}
// 	}
// 	return mas;
// }

// console.log(filter([4, 43, 6, 8, 2, 1], item => item = item.length));


// function methodMap(arr, func2){
// 	var mas = [];
// 	var k = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if( func2(arr[i]) ) {
// 			mas[k] = arr[i].length;
// 		k++;
// 		}
// 	}
// 	return mas;
// }

// console.log(methodMap(["Почему", "надо", "учить", "JavaScript"], item => item.length));


// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });



function methodForEach(arr, callback){
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}


methodForEach(['красный малыш', 'красный2', 'красный старший'], function(name, i, names) {
  console.log('Number: ' + name + ', index: ' + i + ',', names)
});


function methodMap(arr, callback, thisArg) {
	var results = [];
	for (var i = 0; i < arr.length; i = i + 1) {
		results.push(callback.call(thisArg, arr[i], i, arr));
	}
	return results;
};

var spliceworks = methodMap(["Почему", "надо", "учить", "JavaScript"], function(splicework) {
	return splicework.slice(0, 5);
});

var wordsLength = methodMap(["Почему", "надо", "учить", "JavaScript"], function(words) {
	return words.length;
});


console.log(spliceworks); 
console.log(wordsLength); 


