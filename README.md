# is-valid-date

Returns true when passed Date object with valid value. Returns descriptive error otherwise.

## Install

```sh
$ npm install is-valid-date --save
```

## Usage

```js
const IsValidDate = require('is-valid-date');

IsValidDate( new Date() );
// truew

IsValidDate( '13 December 2001' );
// Error: Not a date object.

IsValidDate( new Date(undefined) );
// Error: Invalid date supplied.
```
