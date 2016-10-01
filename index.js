function isValidDateObj(date) {

	let type = Object.prototype.toString.call(val);

  if (!(date instanceof Date) || type !== '[object Date]') {

		// not a Date object
		return false;

  }

	if (date.toString() === 'Invalid Date') {

		// Date object with value 'Invalid Date'
		return false;

	}

	return true;

}

module.exports = isValidDateObj;
