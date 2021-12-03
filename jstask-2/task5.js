// class CustomArray {
//   constructor() {
//     this.elements = arguments;
//   }

//   Includes(element, num) {
//     let res = false;
//     if (num === undefined) {
//       for (const item of this.elements) {
//         if (element === item) {
//           res = true;
//         }
//       }
//       return res;
//     } 
    
//     else {
//       for (let i = num; i < this.elements.length; i++) {
//         if (element === this.elements[i]) {
//           res = true;
//         }
//       }
//       return res;
//     }
//   }
// }

// let arr = new CustomArray(12, 22, 35, 7);

// console.log(arr.Includes(12));
// console.log(arr.Includes(12,3));
