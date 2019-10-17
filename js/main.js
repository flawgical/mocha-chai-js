function addClass(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) {
      return;
    }
  
    if(el.className !== '') {
      //ensure class names are separated by a space
      newClass = ' ' + newClass;
    }
  
    el.className += newClass;
  }
  //--------------


//   function pow(x, n) {
//     return 8; // :) we cheat!
//   }

  function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }