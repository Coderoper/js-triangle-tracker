// export function find(input1, input2, input3)
// {
//     var result1 = "equilateral";
//     var result2 = "isoceles";
//     var result3 = "scalene";
//     var result4 = "not a triangle";
//
// if ((input1+input2)>input3 &&
//     (input2+input3)>input1 &&
//     (input1+input3)>input2) {
//     if (input1 === input2 && input1 === input3) {
//       return result1;
//     } else if (input1 === input2 ||
//               input2 === input3 ||
//               input1 === input3) {
//       return (result2);
//     } else {
//       return(result3);
//   }
// } else {
//  return (result4);
// }
// }
// export function find(side1, side2, side3)
// {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }
// find.prototype.checkType = function()
// {
class find {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType()
  {
  if ((this.side1 < (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)))
    {
      return "not a triangle";
    }
    console.log("conditional not reached.");
  };
}
exports.triangleModule = find;
