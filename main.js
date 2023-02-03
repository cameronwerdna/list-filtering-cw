function filter_list(l) {
    return l.filter(item => item !== String(item))
  }


console.log(filter_list([1,2,'a','b','c',3])) // -> [1,2,3]
console.log(filter_list([2,'3',4,'5',6,'7',8])) // -> [ 2, 4, 6, 8 ]
console.log(filter_list([123,546,'657','6,,','3',5])) // -> [ 123, 546, 5 ]