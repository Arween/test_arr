// var names = 'Маша, Петя, Марина, Василий';
// var symbol = ',';
// var arr = names.split(', ');
// for (var i = 0; i < names.length; i++) {
// }




function methodSplit(){
    var arr = [];
    var str = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    var temp = str.replace(/[/.,!?;]*/g, '');
    var symbol = '';
//    debugger;
    for (var i = 0; i < temp.length + 1; i++) {
        if (temp[i] != 'o' && i != temp.length) {
            symbol += temp[i];
        }
        else {
            arr.push(symbol);
            symbol = '';
        }
    };
//    for (var i = 0; i < arr.length; i++){
//      console.log(arr[i]);
//    };
    console.log(arr);
};
    
methodSplit();

function methodJoing(){
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
	var str = '';
	for (var i = 0; i < arr.length; i++) {
        str += arr[i];
    };
    console.log(str);
};

methodJoing();


function methodDelete(){
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
	var newArr = [];
	var element = 'Маша';
	for (var i = 0; i < arr.length; i++) {
       if (arr[i] == element){
       }
       	else {
       		newArr.push(arr[i]);
       	}
    };
    console.log(newArr);
};

methodDelete();


function methodSplice(n, m, element){  //немного не так, без добавления работает норм
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
    	if (i >= n-1 && i <= m-1){
    		for (var j = 0; j < element.length; j++) {
    			newArr.push(element[j]);
    		}

       }
       	else {
       			newArr.push(arr[i]);
       	}
    };
    arr = newArr; // просто потестила
//    console.log(newArr);
    console.log(arr);
};

methodSplice(1, 2 , ['element', 'dfdsf']); 

function methodSplice2(n, m, element){ // хорошо работает
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
	var newArr = [];
	var temp = [];
	for (var i = 0; i < arr.length; i++) {
    	if (i >= n-1 && i <= m-1){	
       }
       	else {
       			newArr.push(arr[i]);
       	}
    };
    for (var k = 0; k < newArr.length; k++) {
    	if (k == n-1){
    		for (var j = 0; j < element.length; j++) {
    			temp.push(element[j]);
    		}
    	}
    	temp.push(newArr[k]);

    };
    arr = temp; // просто потестила
//    console.log(newArr);
    console.log(arr);
};

methodSplice2(2, 1 , ['element', 'dfdsf']);



function sortNumber(){
	var arr = [1, -10, 2, -21, 30, -5];

	var twoDigit = arr.filter(function(number) {
  		return (Math.abs(number) > 9 && Math.abs(number) < 100);
	});

	console.log(twoDigit); 
};

sortNumber();
