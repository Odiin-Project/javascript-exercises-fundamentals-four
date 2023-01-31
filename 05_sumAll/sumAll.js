const sumAll = function(min,max) {
    // console.log(...arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(typeof(arguments[0]));
    // console.log(typeof(arguments[1]));


    if(typeof(arguments[0]) !== 'number' || typeof(arguments[1]) !== 'number' || arguments[0] < 0 || arguments[1] < 0){
        return "ERROR";
    }

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }
      let sum = 0;
      for (let i = min; i < max + 1; i++) {
        sum += i;
      }
      return sum;

    // Not the best solution it doesn't pass if arg[0] > arg [1] see better solution above
    // let counter = arguments[0];
    // let num = arguments[0];
    // let newnum;
    // let result;
    // while(counter < arguments[1]){
    //     if(counter < (arguments[0] + 1)){
    //         result = num + num + 1;            
    //         num = num + 2;
    //     }else{
    //         result = result + num;
    //         num ++;
    //     }        
    //     counter ++;

    // }
    // return result;


        
};

// Do not edit below this line
module.exports = sumAll;
