const objt = require("../../routes/home");
const array = objt.array;

const Validate = function (index) {

    for (x in array) {
  
      if (array[x][0] == index+1) {
  
        return true
      }
    }
  
  
  };
  exports.Validate = Validate;