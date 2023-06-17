function checkPalindrome() {
    var input = document.getElementById("inputString").value.toLowerCase();
    var reversedInput = input.split("").reverse().join("");
  
    if (input === reversedInput) {
      document.getElementById("result").innerHTML = "It's a palindrome!";
    } else {
      document.getElementById("result").innerHTML = "It's not a palindrome.";
    }
  }
  