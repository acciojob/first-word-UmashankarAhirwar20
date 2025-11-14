function firstWord(s) {
  // your code here
	if (!s) return "";

	let trimed = s.trimStart();

	let space = trimed.indexOf(" ");
	if (space === -1) {
		return s;
	}
	return trimed.slice(0, space);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


