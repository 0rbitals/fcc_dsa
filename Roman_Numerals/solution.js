const romanNumerals = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}
export const toRoman = (number) => {
  let converted = '';
  const numbers = number.toString(10).split('');
  if(number <= 10) {
    converted = getOnes(number);
  } else if (number > 10 && number < 100) {
    converted = getTensAndOnes(numbers);
  } else if (number >= 100 && number < 1000) {
    converted = getHundreds(numbers);
  } else if (number >= 1000){
    converted = getThousands(numbers);
  }
  return converted;
};

function getOnes(number){
  let converted = romanNumerals[number];
  return converted;
}

function getTensAndOnes(numbers){
  let converted = '';
  const onesPlace = getOnes(numbers[1]);
  switch(numbers[0]){
    case '0':
      converted = onesPlace;
      break;
    case '1':
      converted = romanNumerals[10] + onesPlace;
      break;
    case '2':
      converted = romanNumerals[10].repeat(2) + onesPlace;
      break;
    case '3':
      converted = romanNumerals[10].repeat(3) + onesPlace;
      break;
    case '4':
      converted = romanNumerals[10] + romanNumerals[50] + onesPlace;
      break;
    case '5':
      converted = romanNumerals[50] + onesPlace;
      break;
    case '6':
      converted = romanNumerals[50] + romanNumerals[10] + onesPlace;
      break;
    case '7':
      converted = romanNumerals[50] + romanNumerals[10].repeat(2) + onesPlace;
      break;
    case '8':
      converted = romanNumerals[50] + romanNumerals[10].repeat(3) + onesPlace;
      break;
    case '9':
      converted = romanNumerals[10] + romanNumerals[100] + onesPlace;
      break;
    }
  return converted;
}

function getHundreds(numbers){
  let converted = '';
  const tensAndOnesPlace = getTensAndOnes(numbers.splice(1));
  switch(numbers[0]){
    case '0':
      converted = tensAndOnesPlace;
      break;
    case '1':
      converted = romanNumerals[100] + tensAndOnesPlace;
      break;
    case '2':
      converted = romanNumerals[100].repeat(2) + tensAndOnesPlace;
      break;
    case '3':
      converted = romanNumerals[100].repeat(3) + tensAndOnesPlace;
      break;
    case '4':
      converted = romanNumerals[100] + romanNumerals[500] + tensAndOnesPlace;
      break;
    case '5':
      converted = romanNumerals[500] + tensAndOnesPlace;
      break;
    case '6':
      converted = romanNumerals[500] + romanNumerals[100] + tensAndOnesPlace;
      break;
    case '7':
      converted = romanNumerals[500] + romanNumerals[100].repeat(2) + tensAndOnesPlace;
      break;
    case '8':
      converted = romanNumerals[500] + romanNumerals[100].repeat(3) + tensAndOnesPlace;
      break;
    case '9':
      converted = romanNumerals[100] + romanNumerals[1000] + tensAndOnesPlace;
      break;
  }
  return converted;
}

function getThousands(numbers){
  let converted = '';
  const hundredsPlace = getHundreds(numbers.splice(1));
  switch(numbers[0]){
    case '1':
      converted = romanNumerals[1000] + hundredsPlace;
      break;
    case '2':
      converted = romanNumerals[1000].repeat(2) + hundredsPlace;
      break;
    case '3':
      converted = romanNumerals[1000].repeat(3) + hundredsPlace;
      break;
  }
  return converted;
}