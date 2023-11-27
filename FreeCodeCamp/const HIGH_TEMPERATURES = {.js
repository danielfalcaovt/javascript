const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems = []
    for (let pos=0;pos <arr.length;pos++){
    failureItems.push([`<li class="text-warning">${arr[pos]}</li>`])};
    // Only change code above this line
  
    return failureItems;
  }
  const failuresList = makeList(result.failure);
