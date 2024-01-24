/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }

    anagramMap.get(sortedStr).push(str);
  }

  const result = [];

  for (const arr of anagramMap.values()) {
    result.push(arr);
  }

  return result;
}