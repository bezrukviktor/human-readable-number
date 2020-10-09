module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = [];

  if (number === 0) return 'zero';

  if (number > 99) {
      result.push(ones[Math.floor(number/100)] + ' hundred ' + getTeens(number%100));
  } else {
    result.push(getTeens(number));
  }

  function getTeens(num) {
    if (num >= 20) {
      return tens[Math.floor(num/10)] + ' ' + getOnes(num%10);
    } else if (num > 9 && num < 20) {
      return teens[Math.floor(num%10)];
    } else {
      return getOnes(num);
    }
  }

  function getOnes(num) {
    if (num > 0) {
      return ones[num];
    } else {
      return '';
    }
  }

  return result.join('').trim();
}
