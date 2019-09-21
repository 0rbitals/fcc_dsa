function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9+]/gim, '');
  var newStr = str.split('');
  var nArray = newStr.reverse();
  nArray = nArray.join('');
  if (nArray === str) {
    return true;
  } else {
    return false;
  }
}

palindrome('A man, a plan, a canal. Panama');
