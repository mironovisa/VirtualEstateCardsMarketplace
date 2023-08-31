const checkIfMatchingPattern = (fieldName, fieldValue, regexPatterns) => {
    // Check if fieldValue matches the regex pattern
    return regexPatterns[fieldName].test(fieldValue);
  };
  
  export const validateInput = (data, regexPatterns) => {
    const isValid = Object.keys(data).every(
        (fieldName) => checkIfMatchingPattern(fieldName, data[fieldName], regexPatterns)
      );
    Object.keys(data).forEach((key) => {
      const isValid = checkIfMatchingPattern(key, data[key]);
      if (!isValid) {
        console.log("Incorrect " + key + " field");
      }
    });
    return isValid;
  };

  
  