export class Token {
  #grid;

  constructor(grid) {
    this.#grid = grid;
  }

  build() {
    const colorsArray = this.getColorArray();
    const gridInt = this.getGridInt(colorsArray);

    return gridInt;
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
}
