function convertToRoman(num) {
    let roman_arr=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let decimal_arr=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result="";

    for(let i=0;i<decimal_arr.length;i++){
        while(decimal_arr[i]<=num){
            result+=roman_arr[i];
            num-=decimal_arr[i];
        }
    }
    return result;
}
