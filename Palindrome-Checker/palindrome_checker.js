function palindrome(str) {
  let arr=str.toLowerCase().split(/[\W_]/g)
  str=arr.join("");
  arr=str.split("");
  let len=arr.length-1;
  for(let i=0;i<len/2;i++){
    if(arr[i]!==arr[len-i]){
      return false;
    }
  }
  return true;
}
