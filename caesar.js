const SHIFT = 13;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const upperCaseRegex = /[A-Z]/;
const regexWithoutLettersAndNumbers = /\W/;

function validate(input) {
  if (typeof input !== "string") {
    throw new Error("The parameter is not of type string.");
  } else if (input === "") {
    throw new Error("The string is empty.");
  } else if (regexWithoutLettersAndNumbers.test(input)) {
    throw new Error("The string can only contain letters and numbers.");
  }
}

const calculateNewIndex = (index) => (index + SHIFT) % ALPHABET.length;

function replaceChar(char) {
  let newChar = char.toLowerCase();
  if (ALPHABET.includes(newChar)) {
    const index = ALPHABET.indexOf(newChar);
    newChar = ALPHABET[calculateNewIndex(index)];
  }

  return upperCaseRegex.test(char) ? newChar.toUpperCase() : newChar;
}

function caesar(text) {
  validate(text);
  const result = [...text].map(replaceChar);

  return result.join("");
}
