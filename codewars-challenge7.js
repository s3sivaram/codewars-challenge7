// ------------solved by s3sivaram----on 21-Jul-21
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  let obj = Array.from(str.toLowerCase()).reduce((acc, e) => {
    return { ...acc, [e[0]]: parseInt([acc[e[0]]]) + 1 || 1 };
  }, {});

  for (entries of Object.values(obj)) {
    if (entries > 1) {
      return false;
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
