function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function inc(n){
  return n+1
}

function dec(n){
  return n-1
}

function makeInt(n){
  let parsed = parseInt(n, 10);
  if (isNaN(parsed)) {
    return NaN;
  } else {
    return n;
  }
}