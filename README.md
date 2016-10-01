# is-valid-date-obj

Returns true when passed Date object with valid value. Returns descriptive error otherwise.

## Install

```sh
$ npm install is-valid-date-obj --save
```

## Usage

```js
const IsValidDateObj = require('is-valid-date-obj');

IsValidDateObj( new Date() );
// true

IsValidDateObj( new Date('not a date string') );
// false

IsValidDateObj('13 December 2001');
// false
```
