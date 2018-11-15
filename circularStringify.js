(function(console){

    console.stringify = function stringify(item, censor, space) {
        return JSON.stringify(item, censor ? censor : filter(item), space)
    }
})(console)

function filter(item) {
  var i = 0;

  return function(key, value) {
    if (key === "__proto__") {
      return "--proto--";
    } else {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;  
    }
  }
}