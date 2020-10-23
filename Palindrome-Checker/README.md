Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

First of all, we have to remove all non-alphanumeric characters and turn everything into the same case. Then, we have to compare the caracters of the beginnnig and the end at the same time.

Expected results:

- palindrome("eye"): true
- palindrome("not a palindrome"): false
- palindrome("A man, a plan, a canal. Panama"): true
