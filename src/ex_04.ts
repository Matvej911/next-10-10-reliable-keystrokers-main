
function capitalizeNames(arr:string[]) {

    let capitalize = arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());;
    return capitalize
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]