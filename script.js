// function to return characters of a string reversed

function rev(str) {
    return str.split("").reverse().join("");
}

console.log(rev("hello world"));

// function to check for a palindrome

function pal(word) {
    let words = word.toLowerCase();
    let newWord = words.split("").reverse().join("");
    console.log(newWord);
    if(newWord === words) {
        return true;
    }
    return false
}
console.log(pal("Racecar"));

// function to return character that appears most often

const maxChar = str => {
    const myStr = str.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
 }
console.log(maxChar("helloworoold"));
//function to check the number of consonants and vowels
function whoWins(str) {
    let strr = str.toLowerCase();
    let vowelsCount = 0;
    let consonantCount = 0;
   for (var i = 0; i <strr.length; i++) {
    if (strr.charAt(i) == "a" || strr.charAt(i) == "e" || strr.charAt(i) == "i" || strr.charAt(i) == "o" || strr.charAt(i) == "u") {
        vowelsCount++;
      }else {consonantCount++};
    }
    if(vowelsCount>consonantCount) {
        return "vowels win";
    }
        else if(vowelsCount<consonantCount) {
          return "Consonants win";
        }
          return "draw";

}

console.log(whoWins("ggbeeio"));

// vowel/consonant number 2
    function vowCon(str) {
        let strr = str.toLowerCase();
        let vowelsCount = 0;
        let consonantCount = 0;
        const alpha = "aeiou";
    for(let i = 0;i<strr.length;i++) {
        if(alpha.includes(strr[i])) {
            vowelsCount++;
        } else {consonantCount++};
    }
    if(vowelsCount>consonantCount) {
        return "vowels win";
    }
        else if(vowelsCount<consonantCount) {
          return "Consonants win";
        }
          return "draw";

        }
    
  
  console.log(vowCon("oooppPp"))


            

 