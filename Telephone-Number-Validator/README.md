Return true if the passed string looks like a valid US phone number.

Valid formats:  
  555-555-5555  
  (555)555-5555  
  (555) 555-5555  
  555 555 5555  
  5555555555  
  1 555 555 5555  
  
Code Explanation:
- '^' denotes the beginning of the string.
- '(1\s?)?' allows for “1” or "1 " if there is one.
- '\d{3}' checks for three digits.
- '(\(\d{3}\)|\d{3})' checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
- '[\s\-]?' checks for spaces or dashes between the groups of digits.
- '$' denotes the end of the string.

Expected rules:
- telephoneCheck("1 555-555-5555"): true
- telephoneCheck("555-5555"): false
- telephoneCheck("1 456 789 4444"): true
