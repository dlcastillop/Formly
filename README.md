# Formly

A simple JavaScript library for form validation.

## How to use

### Import

Download the file `formly.js` and import the functions using the route where you put this file.

## Functions

### Any format

The function `validAnyFormat(anyInput, REGEX)` verify any format you want. This is the default function.

**Input**

It receives an input element and a regular expression.

For example:

    import validAnyFormat from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validAnyFormat(form, /[a-z]/));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Email

The function `validEmailFormat(emailInput)` verify the email format.

**Input**

It receives an input element.

For example:

    import { validEmailFormat } from "./formly.js";

    let emailForm = document.getElementsByTagName("input")[0];
    console.log(validEmailFormat(emailForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Password

The function `validPasswordFormat(passwordInput, lowercase, uppercase, numeric, special, characters)` verify the password format.

**Input**

It receives an input element and 5 integers which represent the minimun ammount of lowercase characters, uppercase characters, numeric characters, special characters and characters in general that the password must have.

For example:

    import { validPasswordFormat } from "./formly.js";

    let passwordForm = document.getElementsByTagName("input")[0];
    console.log(validPasswordFormat(passwordForm, 1, 1, 1, 1, 8));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Maximum age

The function `validMaxAge(anyInput, max)` verify the maximum age that the form accepts.

**Input**

It receives an input element and an integer which represents the maximum age that the form accepts.

For example:

    import { validMaxAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMaxAge(ageForm, 18));

**Output**

It returns `True` if the age in the form is lower o equal than the age that the form accepts or `False` if the age in the form is higher than the age that the form accepts.

### Minimum age

The function `validMinAge(anyInput, min)` verify the minimum age that the form accepts.

**Input**

It receives an input element and an integer which represents the minimum age that the form accepts.

For example:

    import { validMinAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMinAge(ageForm, 18));

**Output**

It returns `True` if the age in the form is higher or equal than the age that the form accepts or `False` if the age in the form is lower than the age that the form accepts.

### Input is empty

The function `isInputEmpty(anyInput)` verify if an input is empty.

**Input**

It receives an input element.

For example:

    import { isInputEmpty } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(isInputEmpty(form));

**Output**

It returns `True` if the input is empty or `False` if the input is not empty.

### URL

The function `validWebsiteFormat(websiteInput)` verify the URL format.

**Input**

It receives an input element.

For example:

    import { validWebsiteFormat } from "./formly.js";

    let websiteForm = document.getElementsByTagName("input")[0];
    console.log(validWebsiteFormat(websiteForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Maximum amount of characters

The function `validMaxChar(anyInput, max)` Verify the maximum amount of characters that the form accepts.

**Input**

It receives an input element and an integer which represents the maximum amount of characters that the form accepts.

For example:

    import { validMaxChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMaxChar(form, 10));

**Output**

It returns `True` if the amount of characters in the form is lower or equal than the maximum amount of characters that the form accepts or `False` if the amount of characters in the form is higher than the maximum amount of characters that the form accepts.

### Minimum amount of characters

The function `validMinChar(anyInput, min)` verify the minimum amount of characters that the form accepts.

**Input**

It receives an input element and an integer which represents the minimum amount of characters that the form accepts.

For example:

    import { validMinChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMinChar(form, 10));

**Output**

It returns `True` if the amount of characters in the form is higher or equal than the maximum amount of characters that the form accepts or `False` if the amount of characters in the form is lower than the maximum amount of characters that the form accepts.

### Username

The function `validUsername(usernameInput, sm)` verify the username format of Twitter or GitHub.

**Input**

It receives an input element and a string which represents the platform. The last one can take 1 of 2 values: `TW` for Twitter or `GH` for GitHub.

For example:

    import { validUsername } from "./formly.js";

    let usernameForm = document.getElementsByTagName("input")[0];
    console.log(validUsername(usernameForm, "TW"));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Exact value

The function `validExactInput(anyInput, exactValue)` verify if an input has an exact value.

**Input**

It receives an input element and a string which represents the exact value.

For example:

    import { validExactInput } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(validExactInput(input, "Daniel Castillo"));

**Output**

It returns `True` if the input has the exact value or `False` if the input has not the exact value.

### Radio button selected

The function `RadioButtonSelected(nameAttr)` verify if an option in a group of radio button is selected.

**Input**

It receives a string which represents the value of the `name` attribute in the radio buttons group.

For example:

    import { RadioButtonSelected } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(RadioButtonSelected("color"));

**Output**

It returns `True` if an option is selected or `False` if there is no option selected.

### Checkbox: maximum amount of selected options

The function `validMaxCheckbox(nameAttr, max)` verify the maximum amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the maximum amount of selected options that a group of checkbox accepts.

For example:

    import { validMaxCheckbox } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(validMaxCheckbox("movies", 3));

**Output**

It returns `True` if the amount of selected options is lower or equal than the maximum amount of selected options that a group of checkbox accepts or `False` if the amount of selected options is higher than the maximum amount of selected options that a group of checkbox accepts.

### Checkbox: minimum amount of selected options

The function `validMinCheckbox(nameAttr, min)` verify the minimum amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the minimum amount of selected options that a group of checkbox accepts.

For example:

    import { validMinCheckbox } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(validMinCheckbox("videos", 2));

**Output**

It returns `True` if the amount of selected options is higher or equal than the minimum amount of selected options that a group of checkbox accepts or `False` if the amount of selected options is lower than the minimum amount of selected options that a group of checkbox accepts.

### Checkbox: exact amount of selected options

The function `validExactCheckbox(nameAttr, exact)` verify the exact amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the exact amount of selected options that a group of checkbox accepts.

For example:

    import { validExactCheckbox } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(validExactCheckbox("music", 4));

**Output**

It returns `True` if the amount of selected options is equal than the exact amount of selected options that a group of checkbox accepts or `False` if the amount of selected options is different than the exact amount of selected options that a group of checkbox accepts.

### IPv4

The function `validIpv4Format(IpInput)` verify the IPv4 format.

**Input**

It receives an input element.

For example:

    import { validIpv4Format } from "./formly.js";

    let ipForm = document.getElementsByTagName("input")[0];
    console.log(validIpv4Format(ipForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.

### Subnet mask

The function `validMaskFormat(maskInput)` verify the subnet mask format.

**Input**

It receives an input element.

For example:

    import { validMaskFormat } from "./formly.js";

    let maskForm = document.getElementsByTagName("input")[0];
    console.log(validMaskFormat(maskForm));

**Output**

It returns `True` if the format is correct or `False` if the format is not correct.
