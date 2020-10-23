function rot13(str) {
  str=str.split("")
  let ascii_result=[];
  let result="";
  let reg=new RegExp(/[A-Z]/);
  for(let i=0;i<str.length;i++){
    if(reg.test(str[i])){
      ascii_result.push((str[i].charCodeAt()-52)%26 +65)
    } else{
      ascii_result.push(str[i].charCodeAt());
    }
  }
  for(let i=0;i<ascii_result.length;i++){
    result+=String.fromCharCode(ascii_result[i]);
  }
  return result;
}
