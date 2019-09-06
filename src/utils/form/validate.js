/* Constants */
import rules from "./rules"

/* Public functions to validate input forms
  @CONST type = name, email, password, code, .etc
  @DEF rules = type => message, regex
*/

function getRule(type = 'default') {
  const rule = rules[type]
  if(typeof rule !== 'undefined'){
    return rule
  }
  return rules['default']
}

function isValidInput(value, type = 'default', debug = false){
  const { message, regex } = getRule(type)
  if(debug) console.log(`type: ${type} | value: ${value} | regex: ${regex} | message: ${message}`)
  return regex.test(value)
}

function applyMask(value, type = 'default'){
  const rule = getRule(type)
  if(typeof rule !== "undefined"){
    if(Boolean(rule.mask)){
      const formatted = maskString(value, rule.mask, { "#": /\d/})
      return formatted
    }
  }

  return value
}

/*
  This function accepts the value, mask, and the pattern you want for the mask
  then returns the masked value back. This is a private function that is exposed via applyMask
*/
function maskString(value = '', mask = '', maskPatterns = {}) {
  let maskedResult = '';
  // Split the characters on the value
  let characters = value.split('');
  // Split the mask format into placeholder items
  let placeholders = mask.split('');

  // Apply these rules to each character in the value
  while (characters.length > 0) {
    // Remove the first character from the original value
    let unmaskedChar = characters.shift()
    // Check for unmasked characters left in the value
    while (unmaskedChar !== null) {
      // take the first mask placeholder from the placeholders array
      let maskPlaceholder = placeholders.shift();
      // If mask placeholder not there, the string is longer than mask so cut off character
      if (maskPlaceholder !== undefined) {
        // Create the mask pattern against the mask placeholder
        let maskPattern = maskPatterns[maskPlaceholder.toUpperCase()];
        // If pattern not found, the character is a placeholder character added as is
        if (maskPattern !== undefined) {
          let check = false;
          // If the mask pattern is a function
          if (typeof maskPattern === 'function') {
            check = maskPattern(unmaskedChar);
          }
          // If the mask patterns is a regex
          if (maskPattern instanceof RegExp) {
            check = maskPattern.test(unmaskedChar);
          }
          // If the character passed check, add to result, otherwise put maskPlaceholder back into list
          check ? maskedResult += unmaskedChar : placeholders.unshift(maskPlaceholder)
          //Reset the character to continue the loop
          unmaskedChar = null;
        }else {
          maskedResult += maskPlaceholder;
        }
      }else {
        // reset current character to continue the loop
        unmaskedChar = null;
      }
    }
  }

  return maskedResult;
}


export {
  getRule,
  isValidInput,
  applyMask,
  maskString
}
