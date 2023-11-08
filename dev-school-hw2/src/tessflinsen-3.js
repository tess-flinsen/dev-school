/*Your job is to group the words in anagrams.
What is an anagram ?
star and tsar are anagram of each other because you can rearrange the
letters for star to obtain tsar.
Example
A typical test could be :
// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
// output
[
["tsar", "star", "tars"],
["rat", "tar"],
["cheese"]
]*/
function group_anagrams(words) {
    const anagram_groups = [];
    const seen = new Array(words.length).fill(false);
  
    for (let i = 0; i < words.length; i++) {
      if (!seen[i]) {
        const group = [words[i]];
        seen[i] = true;
  
        for (let j = i + 1; j < words.length; j++) {
          if (!seen[j] && are_anagrams(words[i], words[j])) {
            group.push(words[j]);
            seen[j] = true;
          }
        }
  
        anagram_groups.push(group);
      }
    }
  
    return anagram_groups;
  }
  
  function are_anagrams(word1, word2) {

    if (word1.length !== word2.length) {
      return false;
    }
  
    const sorted_word1 = word1.toLowerCase().split('').sort().join('');
    const sorted_word2 = word2.toLowerCase().split('').sort().join('');
  
    return sorted_word1 === sorted_word2;
  }
  
  const anagram_groups = group_anagrams(["tsar", "rat", "tar", "star", "tars", "cheese", "rose", "Esor"]);
  console.log(anagram_groups);
  
