class Validation {
  static TYPES = {
    email: {
      pattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
      flags: ''
    }
    // add other validation types below
  };

  static validate(validationType, value) {
    const { pattern, flags } = validationType;

    const regexp = new RegExp(pattern, flags);

    return regexp.test(value);
  }
}

export default Validation;
