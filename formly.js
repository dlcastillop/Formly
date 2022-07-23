// Verify the email format
export const validEmailFormat = (emailInput) => {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let userEmail = emailInput.value;

  return EMAIL_REGEX.test(userEmail);
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
  let userPassword = passwordInput.value;

  return PASSWORD_REGEX.test(userPassword);
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
export const isInputEmpty = (anyInput) => {
  if (anyInput.value === "") {
    return true;
  } else {
    return false;
  }
};

// Verify the website format
export const validWebsiteFormat = (websiteInput) => {
  const WEBSITE_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  let userWebsite = websiteInput.value;

  return WEBSITE_REGEX.test(userWebsite);
};

// Verify the maximum amount of characters that the form accepts
export const validMaxChar = (anyInput, max) => {
  if (anyInput.value.length > max) {
    return false;
  } else {
    return true;
  }
};

// Verify the minimum amount of characters that the form accepts
export const validMinChar = (anyInput, min) => {
  if (anyInput.value.length < min) {
    return false;
  } else {
    return true;
  }
};

// Verify the username format of Twitter or GitHub
export const validUsername = (usernameInput, sm) => {
  let username = usernameInput.value;

  if (sm === "TW") {
    const TW_REGEX = /^[A-Za-z0-9_]{1,15}$/;
    return TW_REGEX.test(username);
  } else if (sm === "GH") {
    const GH_REGEX = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    return GH_REGEX.test(username);
  }
};
