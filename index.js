function add(a, b) {
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a,b){
    return a * b;
}

  function divide(a,b){
    return a / b;
  }
a
  function increment(n) {
    return (n += 1);
  }
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)
  })
  function decrement(n) {
    return (n -= 1);
  }

function makeInt(n) {
    return parseInt(n,10);
  }

function preserveDecimal(n) {
  return parseFloat(n);
}