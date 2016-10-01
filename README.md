# is-valid-date-object

Returns true when passed a Date object with a value other than 'Invalid Date'. Returns false otherwise.

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
