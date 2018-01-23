![logo](https://raw.githubusercontent.com/rupa/isNaan/master/logo.png)

isNaan
======

Test if javascript things are delicious Indian bread.

## Usage

    var isNaan = require('isNaan').isNaan;
    console.log(isNaan(NaN));    // false
    console.log(isNaan(9));      // false
    console.log(isNaan('Naan')); // false (it's not Naan)

## Tests

    npm test
