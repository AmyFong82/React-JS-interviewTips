// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x){
  // check to see if x is negative, if it is negative, then it can't be a palindrome.
  // check also to see if x ends with a "0", because of example 3 above, not a palindrome.
  // 0 on itself is a palindrome??
  // The word palindrome comes from the Greek word palindromes, meaning “running back again”. All single digits are considered palindromes in a base 10 system: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
  if(x < 0 || (x % 10 == 0 && x !=0)){
    return false;
  }

  //set a reversedNum variable
  let reversedNum = 0
  //the while part will stop the loop when the reversedNum is bigger than x, which means we have done half of the digits in x when it is an even number
  while(reversedNum < x){
    // get the last digit of x, using % 10.
    reversedNum = reversedNum * 10 + x % 10
    // get rid of the last digit of x by dividing it by 10.
    // use the Math.trunc() to remove the floating points
    x = Math.trunc(x/10)
  }

  // return the comparision of reversedNum and the half x, or if the original x is an odd num, then remove the last digit of reversedNum first, remove the fractional digits, then compare the two.
  return reversedNum == x || Math.trunc(reversedNum / 10) == x
}

isPalindrome(12321)