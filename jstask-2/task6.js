class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Join(elem) {
    let strin = "";
    if (elem === undefined) {
      for (let i = 0; i < this.elements.length; i++) {
        if (i === this.elements.length - 1) {
          strin += `${this.elements[i]}`;
          break;
        }
        strin += `${this.elements[i]},`;
      }
      return strin;
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        if (i === this.elements.length - 1) {
          strin += `${this.elements[i]}`;
          break;
        }
        strin += `${this.elements[i]} ${elem} `;
      }
      return strin;
    }
  }
}

let arr = new CustomArray(12, 22, 35, 7, "amil");

console.log(arr.Join("and"));
console.log(arr.Join());

