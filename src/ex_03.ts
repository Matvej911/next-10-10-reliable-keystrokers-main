function stringItUp(arr:number[]) {
    let arrstring = arr.map(num => num.toString());
    return arrstring

  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]