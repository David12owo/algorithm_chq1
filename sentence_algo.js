function analyzeSentence(sentence) {
  let length = 0;
  let words = 1;
  let vowels = 0;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increase length
    length++;

    // Check for vowels
    if (isVowel(char)) {
      vowels++;
    }

    // Check for word boundaries (spaces)
    if (char === " ") {
      words++;
    }
  }

  return {
    length,
    words,
    vowels,
  };
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
}
