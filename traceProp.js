const traceProperty = (object, property) => {
  let value = object[property];
  Object.defineProperty(object, property, {
    get () {
      console.trace(`${property} requested`);
      return value;
    },
    set (newValue) {
      console.trace(`setting ${property} to `, newValue);
      value = newValue;
    },
  })
};