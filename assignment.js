function kilometerToMeter(kilometer){
      if(kilometer <= 0){
          return"This result is empty";
      }else{
         var kilometer = kilometer*1000;
          return kilometer;
      }
  }
  var result = kilometerToMeter(5);
  console.log(result);
  
  
  function budgetCalculator(clock, mobile, laptop){
      if(clock <= 0, mobile <=0, laptop <= 0){
          return "Your input is not valid";
      }else{
          var clock = clock * 50;
          var mobile = mobile *100;
          var laptop = laptop * 500;
          var totalBudget = clock + mobile + laptop;
          return totalBudget;
      }
  }
  var result = budgetCalculator(2,2,2);
  console.log(result);
  
  
  function hotelCost(cost){
      if(cost <= 0){
          return "Your input is not valid";
      }else if(cost <= 10){
          return 10 * 100;
      }else if (cost <= 20){
          var fastCost = 10*100;
          var remainingCost = cost - 10;
          var secondCost = remainingCost * 80;
          var totalCost = fastCost + secondCost;
          return totalCost;
      }else{
          var fastCost = 10*100;
          var secondCost = 10 * 80;
          var remainingCost = cost - 10;
          var thirdCost = remainingCost * 80;
          var totalCost = fastCost + secondCost + thirdCost;
          return totalCost;
      }
  }
  var result = hotelCost(20);
  console.log(result);
  
  
  function megaFriend(allName){
      if(allName.length<0){
          return "your input is not  valid";
      }else{
          var result='';
          for (let i = 0; i < allName.length; i++) {
              var item=allName[i]
              if(item.length>result.length){
                  result=allName[i];
              }
          }
          return result;
      }
  }
  var allName= ['Morad', 'A.Rahman', 'Ismail'];
  var result= megaFriend(allName);
  console.log(result);