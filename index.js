const SHIFT = 13;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const upperCaseRegex = /[A-Z]/;
const regexWithoutLettersAndNumbers = /\W/;

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(caesar("PRZEPROGRAMOWANI"), "CEMRCEBTENZBJNAV");
verify(caesar("przeprogramowani"), "cemrcebtenzbjnav");
verify(caesar("PRZEprogramOWANI"), "CEMRcebtenzBJNAV");
verify(caesar("CEMRcebtenzBJNAV"), "PRZEprogramOWANI");
verify(caesar("PrZ3Pr0gR4MoWaN1"), "CeM3Ce0tE4ZbJnA1");
verify(caesar("Caesar13"), "Pnrfne13");
verify(caesar("aBcDefGhijklmnOpqrstuVwxYz"), "nOpQrsTuvwxyzaBcdefghIjkLm");
// verify(caesar(123), '123');
// verify(caesar(''), '');
// verify(caesar(), );
// verify(caesar('abc! d$e-f'), 'nop! q$r-s');
