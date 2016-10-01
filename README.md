# is-valid-date-object

Returns true when passed Date object with valid value. Returns descriptive error otherwise.

## Install

```sh
$ npm install is-valid-date-object --save
```

## Usage

```js
const IsValidDate = require('is-valid-date-object');

IsValidDate( new Date() );
// true

IsValidDate( new Date('not a date string') );
// false

IsValidDate('13 December 2001');
// false
```
