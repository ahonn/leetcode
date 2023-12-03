// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.

const CHAR_CODE_BASE = 97;

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const counts = Array(26).fill(0);
  const charsLen = chars.length;

  for (let i = 0; i < charsLen; i += 1) {
    const code = chars.charCodeAt(i) - CHAR_CODE_BASE;
    counts[code] += 1;
  }

  let result = 0;
  const counted = Array(26);
  for (const word of words) {
    const wordLen = word.length;
    if (wordLen > charsLen) {
      continue;
    }

    counted.fill(0);
    for (let i = 0; i < wordLen; i += 1) {
      const code = word.charCodeAt(i) - CHAR_CODE_BASE;
      const count = counts[code];
      if (count === 0 || count === counted[code]) {
        result -= i;
        break;
      }
      counted[code] += 1;
      result += 1;
    }
  }
  return result;
}