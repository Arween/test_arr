

var array = ['dfsdf', 'dfeeeee', '3ejfkd', '9dovdo', 'oocococo'];

function splice() {
    var mas =[];
    var a = 0;
    for(var k = 0; k < arguments[1]; k++) {
        mas[a] = array[k];
        a++;
    }
    for (var i = arguments[1]; i < arguments[0].length; i++) {
        if (arguments[2] == 0 || i <= (arguments[1] + arguments[2])-1) {
            if(arguments[2] == 0 || i == (arguments[1] + arguments[2])-1) {
                for (var j = 3; j < arguments.length; j++) {
                    mas[a] = arguments[j];
                    a++;
                }
            }
        } else {
            mas[a] = arguments[0][i];
            a++;
        }
    }
    return mas;
}

 console.log(splice(array, 2, 1,'Первое', 'Второе', 'Третье', 'four'));
// массив / номер / количество  / вставить



function methodSplice2(arr, n, m, element){ // мой вариант
    var newArr = [];
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= n-1 && i <= m-1){  
       }
        else {
//          newArr.push(arr[i]);
            myPush(newArr, arr[i]);
        }
    };
    for (var k = 0; k < newArr.length; k++) {
        if (k == n-1){
            for (var j = 0; j < element.length; j++) {
//              temp.push(element[j]);
                myPush(temp, element[j]);
            }
        }
//      temp.push(newArr[k]);
        myPush(temp, newArr[k]);

    };
    arr = temp; // просто потестила
//  console.log(newArr);
    console.log(arr);
};

methodSplice2(['Маша', 'Петя', 'Марина', 'Василий'], 2, 1 , ['element', 'dfdsf']);

function myPush(arr, newElem){
//    arr.length++;
    arr[arr.length] = newElem;
    return arr;
}


function methodForEach(arr, callback){
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


methodForEach(['красный малыш', 'красный2', 'красный старший'], function(name, i, names) {
    console.log('Number: ' + name + ', index: ' + i )
});

methodForEach(['красный малыш', 'красный2', 'красный старший'], function(word) {
    console.log(word);
});





function methodFilter(arr, callback, thisArg) {
    var results = [];
    for (var i = 0; i < arr.length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
//          results.push(arr[i]);
            myPush(results, arr[i]);
        }
    }
    return results;
};

var mas = [5, 10, 22, 2, 7];

var data = methodFilter(mas, function(temp) {
    return temp > 8;
});

console.log(data); 




function methodReduce(arr, callback, startValue) {
    var result = startValue;
    for (var i = 0; i < arr.length; i = i + 1) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};


var arrs = [1, 2, 3, 4, 5];

var arrResults = methodReduce(arrs, function(result, current) {
    return Number(result) + Number(current);
}, []);


console.log(arrResults); 



function methodMap(arr, callback, thisArg) {
    var results = [];
    for (var i = 0; i < arr.length; i = i + 1) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};

var mapLength = methodMap(['Sherlock', 'Eurus', 'Mycroft'], function(words) {
    return words.length;
});
console.log(mapLength); 



function methodSlice(arr, n, m){
    if (m === undefined ) {
        m = arr.length;
    }
    var mas = [];
    for (var i = 0; i < arr.length; i++){
        if (i >= n && i < m) {
//            mas.push(arr[i]);
            myPush(mas, arr[i]);
        }
    }
    console.log(mas);

}

methodSlice(["Почему", "надо", "учить", "JavaScript"], 1, 3)





















