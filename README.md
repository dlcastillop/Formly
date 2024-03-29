# Formly

A simple JavaScript library for form validation.

## How to use

### Import

Download the file **formly.js** and import the functions using the route where you put this file.

## General function

### Any format

The function `validAnyFormat(anyInput, REGEX)` verify any format you want. This is the default function.

**Input**

It receives an input element and a regular expression.

For example:

    import validAnyFormat from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validAnyFormat(form, /[a-z]/));

**Output**

It returns `true` if the format is correct or `false` if it is not.

## Functions to validate forms data

### Date

The function `validDate(dateInput, format)` verify the date.

**Input**

It receives an input element and a string which represents the date format. The last one can take 1 of 3 values: `DMY` for the DD/MM/YYYY format, `MDY` for the MM/DD/YYYY format or `YMD` for the YYYY/MM/DD format.

For example:

    import { validDate } from "./formly.js";

    let dateForm = document.getElementsByTagName("input")[0];
    console.log(validDate(dateForm, "DMY"));

**Output**

It returns `true` if the date is valid or `false` if it is not.

### Email

The function `validEmailFormat(emailInput)` verify the email format.

**Input**

It receives an input element.

For example:

    import { validEmailFormat } from "./formly.js";

    let emailForm = document.getElementsByTagName("input")[0];
    console.log(validEmailFormat(emailForm));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Imei

The function `validImei(imeiInput)` verify the imei number.

**Input**

It receives an input element.

For example:

    import { validImei } from "./formly.js";

    let imeiForm = document.getElementsByTagName("input")[0];
    console.log(validImei(imeiForm));

**Output**

It returns `true` if the imei number is valid or `false` if it is not.

### IPv4

The function `validIpv4Format(IpInput)` verify the IPv4 format.

**Input**

It receives an input element.

For example:

    import { validIpv4Format } from "./formly.js";

    let ipForm = document.getElementsByTagName("input")[0];
    console.log(validIpv4Format(ipForm));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### MAC address

The function `validMacFormat(macInput)` verify the MAC address format.

**Input**

It receives an input element.

For example:

    import { validMacFormat } from "./formly.js";

    let macForm = document.getElementsByTagName("input")[0];
    console.log(validMacFormat(macForm));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Maximum age

The function `validMaxAge(anyInput, max)` verify the maximum age that the form accepts.

**Input**

It receives an input element and an integer which represents the maximum age that the form accepts.

For example:

    import { validMaxAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMaxAge(ageForm, 65));

**Output**

It returns `true` if the age in the form is lower o equal than the age that the form accepts or `false` if it is not.

### Minimum age

The function `validMinAge(anyInput, min)` verify the minimum age that the form accepts.

**Input**

It receives an input element and an integer which represents the minimum age that the form accepts.

For example:

    import { validMinAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validMinAge(ageForm, 18));

**Output**

It returns `true` if the age in the form is higher or equal than the age that the form accepts or `false` if it is not.

### Minimum and maximum age

The function `validRangeAge(anyInput, min, max)` verify the minimum and maximum age that the form accepts.

**Input**

It receives an input element and two integers which represent the minimum and maximum age that the form accepts.

For example:

    import { validRangeAge } from "./formly.js";

    let ageForm = document.getElementsByTagName("input")[0];
    console.log(validRangeAge(ageForm, 18, 65));

**Output**

It returns `true` if the age in the form is within the range of ages that the form accepts or `false` if it is not.

### Number

The function `validNumberFormat(numberInput, format)` verify the number format.

**Input**

It receives an input element and a string which represents the number format. The last one can take 1 of 4 values: `BIN` for binary, `OCT` for octal, `DEC` for decimal or `HEX` for hexadecimal.

For example:

    import { validNumberFormat } from "./formly.js";

    let numberForm = document.getElementsByTagName("input")[0];
    console.log(validNumberFormat(numberForm, "HEX"));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Password

The function `validPasswordFormat(passwordInput, lowercase, uppercase, numeric, special, characters)` verify the password format.

**Input**

It receives an input element and 5 integers which represent the minimun ammount of lowercase characters, uppercase characters, numeric characters, special characters and characters in general that the password must have.

For example:

    import { validPasswordFormat } from "./formly.js";

    let passwordForm = document.getElementsByTagName("input")[0];
    console.log(validPasswordFormat(passwordForm, 1, 1, 1, 1, 8));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Subnet mask

The function `validMaskFormat(maskInput)` verify the subnet mask format.

**Input**

It receives an input element.

For example:

    import { validMaskFormat } from "./formly.js";

    let maskForm = document.getElementsByTagName("input")[0];
    console.log(validMaskFormat(maskForm));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Time

The function `validTime(timeInput, format)` verify the time.

**Input**

It receives an input element and a string which represents the time format. The last one can take 1 of 2 values: `12h` for the HH:MM AM/PM format or `24h` for the HH:MM format.

For example:

    import { validTime } from "./formly.js";

    let timeForm = document.getElementsByTagName("input")[0];
    console.log(validTime(timeForm, "24h"));

**Output**

It returns `true` if the time is valid or `false` if it is not.

### URL

The function `validWebsiteFormat(websiteInput)` verify the URL format.

**Input**

It receives an input element.

For example:

    import { validWebsiteFormat } from "./formly.js";

    let urlForm = document.getElementsByTagName("input")[0];
    console.log(validWebsiteFormat(urlForm));

**Output**

It returns `true` if the format is correct or `false` if it is not.

### Username

The function `validUsername(usernameInput, sm)` verify the username format of Twitter or GitHub.

**Input**

It receives an input element and a string which represents the platform. The last one can take 1 of 2 values: `TW` for Twitter or `GH` for GitHub.

For example:

    import { validUsername } from "./formly.js";

    let usernameForm = document.getElementsByTagName("input")[0];
    console.log(validUsername(usernameForm, "TW"));

**Output**

It returns `true` if the format is correct or `false` if it is not.

## Functions to validate forms requirements

### Checkbox: exact amount of selected options

The function `validExactCheckbox(nameAttr, exact)` verify the exact amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the exact amount of selected options that a group of checkbox accepts.

For example:

    import { validExactCheckbox } from "./formly.js";

    console.log(validExactCheckbox("music", 4));

**Output**

It returns `true` if the amount of selected options is equal than the exact amount that a group of checkbox accepts or `false` if it is not.

### Checkbox: maximum amount of selected options

The function `validMaxCheckbox(nameAttr, max)` verify the maximum amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the maximum amount of selected options that a group of checkbox accepts.

For example:

    import { validMaxCheckbox } from "./formly.js";

    console.log(validMaxCheckbox("movies", 3));

**Output**

It returns `true` if the amount of selected options is lower or equal than the maximum amount that a group of checkbox accepts or `false` if it is not.

### Checkbox: minimum amount of selected options

The function `validMinCheckbox(nameAttr, min)` verify the minimum amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and an integer which represents the minimum amount of selected options that a group of checkbox accepts.

For example:

    import { validMinCheckbox } from "./formly.js";

    console.log(validMinCheckbox("videos", 2));

**Output**

It returns `true` if the amount of selected options is higher or equal than the minimum amount that a group of checkbox accepts or `false` if it is not.

### Checkbox: minimum and maximum amount of selected options

The function `validRangeCheckbox(nameAttr, min, max)` verify the minimum and maximum amount of selected options that a group of checkbox accepts.

**Input**

It receives a string which represents the value of the `name` attribute in the checkboxes group and two integers which represent the minimum and maximum amount of selected options that a group of checkbox accepts.

For example:

    import { validRangeCheckbox } from "./formly.js";

    console.log(validRangeCheckbox("options", 2, 5));

**Output**

It returns `true` if the amount of selected options is within the range that a group of checkbox accepts or `false` if it is not.

### Exact value

The function `validExactInput(anyInput, exactValue)` verify if an input has an exact value.

**Input**

It receives an input element and a string which represents the exact value.

For example:

    import { validExactInput } from "./formly.js";

    let input = document.getElementsByTagName("input")[0];
    console.log(validExactInput(input, "Daniel Castillo"));

**Output**

It returns `true` if the input has the exact value or `false` if it is not.

### Input is empty

The function `isInputEmpty(anyInput)` verify if an input is empty.

**Input**

It receives an input element.

For example:

    import { isInputEmpty } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(isInputEmpty(form));

**Output**

It returns `true` if the input is empty or `false` if it is not.

### Maximum amount of characters

The function `validMaxChar(anyInput, max)` verify the maximum amount of characters that the form accepts.

**Input**

It receives an input element and an integer which represents the maximum amount of characters that the form accepts.

For example:

    import { validMaxChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMaxChar(form, 10));

**Output**

It returns `true` if the amount of characters in the form is lower o equal than the maximum amount of characters that the form accepts or `false` if it is not.

### Minimum amount of characters

The function `validMinChar(anyInput, min)` verify the minimum amount of characters that the form accepts.

**Input**

It receives an input element and an integer which represents the minimum amount of characters that the form accepts.

For example:

    import { validMinChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validMinChar(form, 10));

**Output**

It returns `true` if the amount of characters in the form is higher o equal than the minimum amount of characters that the form accepts or `false` if it is not.

### Minimum and maximum amount of characters

The function `validRangeChar(anyInput, min, max)` verify the minimum and maximum amount of characters that the form accepts.

**Input**

It receives an input element and two integers which represent the minimum and maximum amount of characters that the form accepts.

For example:

    import { validRangeChar } from "./formly.js";

    let form = document.getElementsByTagName("input")[0];
    console.log(validRangeChar(form, 50, 100));

**Output**

It returns `true` if the amount of characters in the form is within the range of characters that the form accepts or `False` if it is not.

### Radio button selected

The function `radioButtonSelected(nameAttr)` verify if an option in a group of radio button is selected.

**Input**

It receives a string which represents the value of the `name` attribute in the radio buttons group.

For example:

    import { radioButtonSelected } from "./formly.js";

    console.log(radioButtonSelected("color"));

**Output**

It returns `true` if an option is selected or `false` if it is not.
