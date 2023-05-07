const phoneRegex = /^0\d([\d]{0,1})([- ]{0,1})\d{7}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4})(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

export { phoneRegex, passwordRegex };
