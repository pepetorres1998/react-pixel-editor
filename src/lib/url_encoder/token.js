export class Token {
  #grid;
  #side;

  constructor(grid, side) {
    this.#grid = grid;
    this.#side = side;
  }

  build() {
    const header = [0x50, 0x58, 1, this.#side];
    const colorsArray = this.getColorArray();
    const gridInt = this.getGridInt(colorsArray);
    const optimizedGridInt = this.optimizeGridInt(gridInt);
    const colorsIntArray = this.getColorsIntArray(colorsArray);

    const all = [...header, ...colorsIntArray, optimizedGridInt.length, ...optimizedGridInt];

    const buf = new Uint8Array(all);

    const token = this.toBase64Url(buf);

    return token;
  }

  getColorArray() {
    const colorsArray = [];

    this.#grid.forEach((pixel) => {
      if(!colorsArray.includes(pixel)) {
        colorsArray.push(pixel);
      }
    });

    return colorsArray;
  }

  getGridInt(colorsArray) {
    const gridInt = [];

    this.#grid.forEach((pixel) => {
      gridInt.push(colorsArray.indexOf(pixel));
    });

    return gridInt;
  }

  // [0, 1, 1, 2, 2, 3, 2, 2, 1, 0]
  // [(1, 0), (2, 1), (1, 3), (2, 2), (1, 1), (1, 0)]
  optimizeGridInt (gridInt) {
    const stack = [];
    const optimizedGridInt = [];

    gridInt.forEach((int) => {
      if(stack.length === 0) {
        stack.push(int);
      } else if(stack[stack.length - 1] === int) {
        stack.push(int);
      } else {
        optimizedGridInt.push(stack.length, stack.pop());
        stack.length = 0;
      }
    });

    return optimizedGridInt;
  }

  getColorsIntArray(colorsArray) {
    const colorsIntArray = [];

    colorsIntArray.push(colorsArray.length * 3);

    colorsArray.forEach((color) => {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      colorsIntArray.push(r, g, b);
    });

    return colorsIntArray;
  }

  toBase64Url(buf) {
    let bin = "";

    for (let i = 0; i < buf.length; i++) {
      bin += String.fromCharCode(buf[i]);
    }

    let b64 = btoa(bin);

    // URL-safe
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}
