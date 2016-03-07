// Write a function, funcCaller, that takes a func (a function) and an arg (any data type).
// The function returns the func called with arg(as an argument).

var funcCaller = function (arg, func) {
  return func(arg);
}

var func =  function (arg)
{
  console.log(arg);
}


funcCaller(5,func);


// Write a function, firstVal, that takes an array, arr, and a function, func, and
//calls func with the first index of the arr, the index # and the whole array.

var firstVal = function (arr, func) {
    return func(arr[0],0, arr);
}

var func = function (value, index, arr)
{
  console.log(value);
  console.log(index);
  for (var i=0; i< arr.length; i++)
  {
    console.log(arr[i]);
  }
}
var myArray = [1,2,3,4,5,6,7,8,9];
firstVal(myArray,func);

//Change firstVal to work not only with arrays but also objects.
//Since objects are not ordered, you can use any key-value pair on the object.

//My Solution
var firstVal = function(obj, func) {
  return func(obj[0],0,obj);
}

var func = function (value, index, obj)
{
  console.log(value);
  console.log(index);
  for (var key in obj)
  {
    console.log(obj[key]);
  }
}

var myObj =  {0: 1,
  1: 9,
  2: 6

};
firstVal(myObj,func);

//Bianca's Solution
firstVal = function(list, func) {
  if(Array.isArray(list)) {
    return func(arr[0], 0, arr);
  } else {
    for(var k in list) {
      return func(list[k], k, list);
    }
  }
}

//Bianca's Second Solution
firstVal = function(list, func) {
  if(Array.isArray(list)) {
    func(arr[0], 0, arr);
  } else {
    //returns an array of all the keys in that object
    var propArr = Object.keys(list);
    func (list[propArr[0]], propArr[0], list);
    }
  }
}
