const phone = {
  maskPhoneNumberFnV1: (phoneNumber: string) => {
    if (typeof phoneNumber === 'string' && phoneNumber.length === 10) {
      // Replace the last four digits with "XXXX"
      return phoneNumber.substring(0, 6) + 'XXXX';
    } else {
      // Handle invalid phone numbers
      return '-';
    }
  },

  maskPhoneNumberFnV2: (phoneNumber: string) => {
    return phoneNumber && 'XXX-XXX-' + phoneNumber?.slice(-4);
  },
};

export default phone;
