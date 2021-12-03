class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  ToString() {
    let strin = "";
    for (let i = 0; i < this.elements.length; i++) {
      if (i === this.elements.length - 1) {
        strin += `${this.elements[i]} `;
        break;
      }
      strin += `${this.elements[i]},`;
    }
    return strin;
  }
}

let arr = new CustomArray(12, 22, 35, 7, "amil");

console.log(arr.ToString());
