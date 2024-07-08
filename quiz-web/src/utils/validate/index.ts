const validateThaiCardId = (id: string) => {
  const idRegex = /^[0-9]{13}$/; // Regular expression for 13-digit numbers

  if (!idRegex.test(id)) {
    return false; // Not a valid Thai Card ID if it doesn't match the format
  }

  const digits = id.split('').map(Number); // Convert each digit to a number
  const sum = digits.reduce((acc: number, digit: number, index: number) => {
    if (index < 12) {
      return acc + digit * (13 - index);
    }
    return acc;
  }, 0);

  const checkDigit = (11 - (sum % 11)) % 10;
  return digits[12] === checkDigit; // Returns true if the last digit matches the calculated check digit
};

const validatePassport = (passportNumber: string) => {
  // const passportRegex = /^[A-Z0-9]{6,9}$/
  const passportRegex = /^[A-Z0-9]+$/;
  return passportRegex.test(passportNumber);
};

export { validateThaiCardId, validatePassport };
