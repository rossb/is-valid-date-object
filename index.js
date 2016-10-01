function isValidDateObj(date) {

  let invalid = !(date instanceof Date)
			|| Object.prototype.toString.call(date) !== '[object Date]'
			|| date.toString() === 'Invalid Date';

	if (invalid) return false;

	return true;

}

module.exports = isValidDateObj;
