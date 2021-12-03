class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Map(callback) {
    let array = [];
    for (const item of this.elements) {
      if (!(this.elements === undefined)) {
        array.push(callback(item));
      }
    }
    return array;
  }
}

let arr = new CustomArray(12, 3, 5, 7);

console.log(arr.Map((elem) => elem * 2));
