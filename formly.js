/* Formly general function */

// Verify any format
export default function validAnyFormat(anyInput, REGEX) {
  return REGEX.test(anyInput.value);
}

/* Formly functions to validate forms data */

// Verify the date
export const validDate = (dateInput, format) => {
  let date = new Date(dateInput.value);
  let [day, month, year] = [];

  if (
    format === "DMY" &&
    validAnyFormat(dateInput, /^\d{2}[/.-]\d{2}[/.-]\d{4}/)
  ) {
    if (dateInput.value.includes("/")) {
      [day, month, year] = dateInput.value.split("/");
    } else if (dateInput.value.includes(".")) {
      [day, month, year] = dateInput.value.split(".");
    } else if (dateInput.value.includes("-")) {
      [day, month, year] = dateInput.value.split("-");
    }

    date = new Date(year + "-" + month + "-" + day);

    if (date != "Invalid Date") {
      return true;
    }
  } else if (
    format === "MDY" &&
    validAnyFormat(dateInput, /^\d{2}[/.-]\d{2}[/.-]\d{4}/) &&
    date != "Invalid Date"
  ) {
    return true;
  } else if (
    format === "YMD" &&
    validAnyFormat(dateInput, /^\d{4}[/.-]\d{2}[/.-]\d{2}/) &&
    date != "Invalid Date"
  ) {
    return true;
  }
  return false;
};

// Verify the email format
export const validEmailFormat = (emailInput) =>
  validAnyFormat(emailInput, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

// Verify the imei
export const validImei = (imeiInput) => {
  let imei = Number(imeiInput.value);
  let sum = 0;

  if (imeiInput.value.length != 15 || isNaN(imei)) {
    return false;
  }

  for (let i = 1; i <= 15; i++) {
    let integer = parseInt(imei / Math.pow(10, 15 - i));

    if (i % 2 === 0) {
      integer = integer * 2;
      sum += parseInt(integer / 10) + (integer % 10);
    } else {
      sum += integer;
    }

    imei = imei % Math.pow(10, 15 - i);
  }

  return sum % 10 === 0;
};

// Verify the IPv4 format
export const validIpv4Format = (ipInput) =>
  validAnyFormat(
    ipInput,
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  );

// Verify the MAC address format
export const validMacFormat = (macInput) =>
  validAnyFormat(macInput, /\b([0-9A-F]{2}[.:-]){5}([0-9A-F]){2}\b/);

// Verify the maximum age that the form accepts
export const validMaxAge = (anyInput, max) => {
  let num = Number(anyInput.value);

  if (isNaN(num)) {
    return false;
  } else {
    return num > max ? false : Number.isInteger(num);
  }
};

// Verify the minimum age that the form accepts
export const validMinAge = (anyInput, min) => {
  let num = Number(anyInput.value);

  if (isNaN(num)) {
    return false;
  } else {
    return num < min ? false : Number.isInteger(num);
  }
};

// Verify the minimum and maximum age that the form accepts
export const validRangeAge = (anyInput, min, max) =>
  validMaxAge(anyInput, max) && validMinAge(anyInput, min) ? true : false;

// Verify the number format
export const validNumberFormat = (numberInput, format) => {
  if (format === "BIN") {
    return validAnyFormat(numberInput, /^[01]+$/);
  } else if (format === "OCT") {
    return validAnyFormat(numberInput, /^[0-7][0-7]*$/);
  } else if (format === "DEC") {
    return validAnyFormat(numberInput, /^\d+\.?\d{0,}$/);
  } else if (format === "HEX") {
    return validAnyFormat(numberInput, /[0-9A-Fa-f]/g);
  }
};

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

// Verify the subnet mask format
export const validMaskFormat = (MaskInput) =>
  validAnyFormat(
    MaskInput,
    /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/
  );

// Verify the time
export const validTime = (timeInput, format) => {
  if (format === "12h") {
    return validAnyFormat(
      timeInput,
      /(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(A|P|a|p)(M|m))/
    );
  } else if (format === "24h") {
    return validAnyFormat(
      timeInput,
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    );
  }
};

// Verify the URL format
export const validWebsiteFormat = (urlInput) =>
  validAnyFormat(
    urlInput,
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

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

/* Formly functions to validate forms requirements */

// Verify the exact amount of selected options that a group of checkbox accepts
export const validExactCheckbox = (nameAttr, exact) =>
  totalChecked(nameAttr) === exact ? true : false;

// Verify the maximum amount of selected options that a group of checkbox accepts
export const validMaxCheckbox = (nameAttr, max) =>
  totalChecked(nameAttr) > max ? false : true;

// Verify the minimum amount of selected options that a group of checkbox accepts
export const validMinCheckbox = (nameAttr, min) =>
  totalChecked(nameAttr) < min ? false : true;

// Verify the minimum and maximum amount of selected options that a group of checkbox accepts
export const validRangeCheckbox = (nameAttr, min, max) =>
  totalChecked(nameAttr) < min || totalChecked(nameAttr) > max ? false : true;

// Verify if an input has an exact value
export const validExactInput = (anyInput, exactValue) =>
  anyInput.value === exactValue ? true : false;

// Verify if an input is empty
export const isInputEmpty = (anyInput) =>
  anyInput.value === "" ? true : false;

// Verify the maximum amount of characters that the form accepts
export const validMaxChar = (anyInput, max) =>
  anyInput.value.length > max ? false : true;

// Verify the minimum amount of characters that the form accepts
export const validMinChar = (anyInput, min) =>
  anyInput.value.length < min ? false : true;

// Verify the minimum and maximum amount of characters that the form accepts
export const validRangeChar = (anyInput, min, max) =>
  anyInput.value.length <= max && anyInput.value.length >= min ? true : false;

// Verify if an option in a group of radio buttons is selected
export const radioButtonSelected = (nameAttr) => {
  let allInputs = document.getElementsByTagName("input");

  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].name === nameAttr && allInputs[i].checked === true) {
      return true;
    }
  }

  return false;
};

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
