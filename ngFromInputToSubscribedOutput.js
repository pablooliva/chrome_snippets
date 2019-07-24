function changeInput(inputName, value) {
  ng.probe($0).componentInstance[inputName] = value;
  ng.probe($0).injector.get(ng.coreTokens.ApplicationRef).tick();
}

function subscribeOutput(outputName, cb) {
  const subscription = ng.probe($0).componentInstance[outputName].subscribe((value) => {
     console.log(`${outputName} => ${value}`);
  });

  return () => subscription.unsubscribe();
}
