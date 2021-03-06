# Formly

A simple JavaScript library for form validation.

## How to use

### Import

Download the file `formly.js` and import the functions using the route where you put this file.

### Function `validEmailFormat(emailInput)`

Verify the email format.

**Input**

It receives a DOM node.

For example:

    import { validEmailFormat } from "./formly.js";

    let emailForm = document.getElementsByTagName("input")[0];
    console.log(validEmailFormat(emailForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Function `validPasswordFormat(passwordInput, lowercase, uppercase, numeric, special, characters)`

Verify the password format.

**Input**

It receives a DOM node and 5 integers which represent the minimun ammount of lowercase characters, uppercase characters, numeric characters, special characters and characters in general that the password must have.

For example:

    import { validPasswordFormat } from "./formly.js";

    let passwordForm = document.getElementsByTagName("input")[0];
    console.log(validPasswordFormat(passwordForm, 1, 1, 1, 1, 8));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Function `validMaxAge(anyInput, max)`

Verify the maximum age that the form accepts.

**Input**

It receives a DOM node and an integer which represents the maximum age that the form accepts.

For example:

    import { validMaxAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMaxAge(ageForm, 18));

**Output**

It returns `True` if the age in the form is lower o equal than the age that the form accepts or `False` if the age in the form is higher than the age that the form accepts.

### Function `validMinAge(anyInput, min)`

Verify the minimum age that the form accepts.

**Input**

It receives a DOM node and the minimum age for the form.

For example:

    import { validMinAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMinAge(ageForm, 18));

**Output**

It returns `True` if the age in the form is higher or equal than the age that the form accepts or `False` if the age in the form is lower than the age that the form accepts.

### Function `isInputEmpty(anyInput)`

Verify if an input is empty.

**Input**

It receives a DOM node.

For example:

    import { isInputEmpty } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(isInputEmpty(form));

**Output**

It returns `True` if the input is empty or `False` if the input is not empty.

### Function `validWebsiteFormat(websiteInput)`

Verify the website format.

**Input**

It receives a DOM node.

For example:

    import { validWebsiteFormat } from "./formly.js";

    let websiteForm = document.getElementsByTagName("input")[0];
    console.log(validWebsiteFormat(websiteForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Function `validMaxChar(anyInput, max)`

Verify the maximum amount of characters that the form accepts.

**Input**

It receives a DOM node and an integer which represents the maximum amount of characters that the form accepts.

For example:

    import { validMaxChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMaxChar(form, 10));

**Output**

It returns `True` if the amount of characters in the form is lower or equal than the maximum amount of characters that the form accepts or `False` if the amount of characters in the form is higher than the maximum amount of characters that the form accepts.

### Function `validMinChar(anyInput, min)`

Verify the minimum amount of characters that the form accepts.

**Input**

It receives a DOM node and an integer which represents the minimum amount of characters that the form accepts.

For example:

    import { validMinChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMinChar(form, 10));

**Output**

It returns `True` if the amount of characters in the form is higher or equal than the maximum amount of characters that the form accepts or `False` if the amount of characters in the form is lower than the maximum amount of characters that the form accepts.

### Function `validUsername(usernameInput, sm)`

Verify the username format of Twitter or GitHub.

**Input**

It receives a DOM node and a string which represents the platform. The last one can take 1 of 2 values: `TW` for Twitter or `GH` for GitHub.

For example:

    import { validUsername } from "./formly.js";

    let usernameForm = document.getElementsByTagName("input")[0];
    console.log(usernameForm(emailForm, "TW"));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.
