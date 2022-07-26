/* Formly functions */

// Verify any format
const validAnyFormat = (anyInput, REGEX) => REGEX.test(anyInput.value);

// Verify the email format
export const validEmailFormat = (emailInput) =>
  validAnyFormat(emailInput, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

// Verify the password format
export const validPasswordFormat = (
  passwordInput,
  lowercase,
  uppercase,
  numeric,
  special,
  characters
) => {
  const PASSWORD_REGEX = new RegExp(
    "^(?=.*[a-z]){" +
      lowercase +
      "}" +
      "^(?=.*[A-Z]){" +
      uppercase +
      "}" +
      "^(?=.*[0-9]){" +
      numeric +
      "}" +
      "^(?=.*[!@#$%^&*]){" +
      special +
      "}" +
      "(?=.{" +
      characters +
      ",})"
  );

  return validAnyFormat(passwordInput, PASSWORD_REGEX);
};

// Verify the maximum age that the form accepts
export const validMaxAge = (anyInput, max) => {
  let num = Number(anyInput.value);

  if (num == NaN) {
    return false;
  } else {
    if (num > max) {
      return false;
    } else {
      return Number.isInteger(num);
    }
  }
};

// Verify the minimum age that the form accepts
export const validMinAge = (anyInput, min) => {
  let num = Number(anyInput.value);

  if (num == NaN) {
    return false;
  } else {
    if (num < min) {
      return false;
    } else {
      return Number.isInteger(num);
    }
  }
};

// Verify if an input is empty
export const isInputEmpty = (anyInput) =>
  anyInput.value === "" ? true : false;

// Verify the website format
export const validWebsiteFormat = (websiteInput) =>
  validAnyFormat(
    websiteInput,
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

// Verify the maximum amount of characters that the form accepts
export const validMaxChar = (anyInput, max) =>
  anyInput.value.length > max ? false : true;

// Verify the minimum amount of characters that the form accepts
export const validMinChar = (anyInput, min) =>
  anyInput.value.length < min ? false : true;

// Verify the username format of Twitter or GitHub
export const validUsername = (usernameInput, sm) => {
  if (sm === "TW") {
    return validAnyFormat(usernameInput, /^[A-Za-z0-9_]{1,15}$/);
  } else if (sm === "GH") {
    return validAnyFormat(
      usernameInput,
      /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
    );
  }
};

// Verify if an input has an exact value
export const validExactInput = (anyInput, exactValue) =>
  anyInput.value === exactValue ? true : false;

// Verify if an option in a group of radio buttons is selected
export const RadioButtonSelected = (nameAttr) => {
  let allInputs = document.getElementsByTagName("input");

  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].name === nameAttr && allInputs[i].checked === true) {
      return true;
    }
  }

  return false;
};

// Verify the maximum amount of selected options that a group of checkbox accepts
export const validMaxCheckbox = (nameAttr, max) =>
  totalChecked(nameAttr) > max ? false : true;

// Verify the minimum amount of selected options that a group of checkbox accepts
export const validMinCheckbox = (nameAttr, min) =>
  totalChecked(nameAttr) < min ? false : true;

// Verify the exact amount of selected options that a group of checkbox accepts
export const validExactCheckbox = (nameAttr, exact) =>
  totalChecked(nameAttr) === exact ? true : false;

// Verify the IPv4 format
export const validIpv4Format = (IpInput) =>
  validAnyFormat(
    IpInput,
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  );

// Verify the subnet mask format
export const validMaskFormat = (MaskInput) =>
  validAnyFormat(
    MaskInput,
    /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/
  );

export default validAnyFormat;

/* Auxiliary function */

// Returns the total of selected checkboxes in a group
const totalChecked = (nameAttr) => {
  let allInputs = document.getElementsByTagName("input");
  let total = 0;

  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].name === nameAttr && allInputs[i].checked === true) {
      total += 1;
    }
  }

  return total;
};
