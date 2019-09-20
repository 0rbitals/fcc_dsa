function telephoneCheck(num) {
  const regEx1 = /^[1]*[-\s]*\d{3}[-\s]*\d{3}[-\s]*\d{4}$/g;
  const regEx2 = /^[1]*[-\s]*[(]\d{3}[)][\s-]*[0-9]{3}[\s-]*[0-9]{4}$/g;
  const isMatch = num.match(regEx1) != null
  || num.match(regEx2) != null;
  return isMatch;
}

telephoneCheck('-1 (757) 622-7382');
