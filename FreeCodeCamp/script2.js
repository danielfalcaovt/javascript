function convertToRoman(num) {
    let roman = ""
    let array = []
   
    if(num == 1){
      return roman = "I"
      array.unshift(roman)
    }else if(num == 4){
      roman = "IV"
      array.unshift(roman)
    }else if(num == 5){
      roman = "V"
      array.unshift(roman)
    }else if(num == 9){
      roman = "IX"
      array.unshift(roman)
    }else if(num >= 10){
        roman = "X"
        array.unshift(roman)
    }else if(num == 40){
        roman = "XL"
        array.unshift(roman)
    }else if(num ==50){
        roman = "L"
        array.unshift(roman)
    }else if(num == 90){
        roman = "XC"
        array.unshift(roman)
    }else if(num ==100){
        roman = "C"
        array.unshift(roman)
    }else if(num == 400){
        roman = "CD"
        array.unshift(roman)
    }else if(num == 500){
        roman = "D"
        array.unshift(roman)
    }else if(num == 900){
        roman = "CM"
        array.unshift(roman)
    }else if(num == 1000){
        roman = "M"
        array.unshift(roman)
    }
   
    
   return array;
  }
  
  convertToRoman(1);