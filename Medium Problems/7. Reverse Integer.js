var reverse = function(x) {
  let numString = Math.abs(x).toString();  
  let splittedNumString = numString.split('');
  let stack = [];
  let result = '';

  for (let i = 0; i < splittedNumString.length; i++) {
    stack.push(splittedNumString[i]);
  }

  for (let i = 0; i = stack.length; i++) {
    result += stack.pop();
  }

  let reversed = parseInt(result);

  if (x < 0) {
    reversed = -reversed;
  }

  if (reversed < -(2**31) || reversed > (2**31)) {
    return 0;
  }

  return reversed;
};
