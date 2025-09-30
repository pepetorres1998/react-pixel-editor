export class Decoder {
  #token;
  #side;

  constructor(token) {
    this.#token = token;
  }

  decode() {
    try {
      const buffer = this.fromBase64ToBuffer();

      const bufferBody = this.checkHeader(buffer);

      const grid = this.getGrid(bufferBody);

      return grid;
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  getGrid(bufferBody) {
    const colorsIntArraySize = bufferBody[0];
    const colorsIntArray = bufferBody.slice(1, colorsIntArraySize);
    const optimizedGridIntSize = bufferBody[colorsIntArraySize];
    const optimizedGridInt = bufferBody.slice(colorsIntArraySize);

    const colorsArray = this.getColorsArray(colorsIntArray);
    const gridInt = this.getGridInt(optimizedGridInt);
    const grid = [];

    gridInt.forEach((index) => {
      grid.push(colorsArray[index]);
    });

    return grid;
  }

  getGridInt(optimizedGridInt) {
    const gridInt = [];

    for(let i = 0; i < optimizedGridInt.length; i += 2) {
      for(let j = 0; j < optimizedGridInt[i]; j++) {
        gridInt.push(optimizedGridInt[i + 1]);
      }
    }

    return gridInt;
  }

  getColorsArray(colorsIntArray) {
    const colorsArray = [];

    for(let i = 0; i < colorsIntArray.length; i += 3) {
      const r = colorsIntArray[i].toString(16).padStart(2, "0");
      const g = colorsIntArray[i + 1].toString(16).padStart(2, "0");
      const b = colorsIntArray[i + 2].toString(16).padStart(2, "0");

      colorsArray.push(`#${r}${g}${b}`);
    }

    return colorsArray;
  }

  fromBase64ToBuffer() {
    let str = this.#token.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) str += "=";

    const bin = atob(str);

    const buffer = new Uint16Array(bin.length);

    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }

    return buffer;
  }

  checkHeader(buffer) {
    const headerPx = buffer.slice(0, 2);
    const headerVersion = buffer[2];
    const headerSide = buffer[3];

    if(headerPx[0] !== 80 && headerPx[1] !== 88) {
      throw new Error("Header is missing!");
    }

    if(headerVersion !== 1) {
      throw new Error("Incorrect version!");
    }

    this.#side = headerSide;

    return buffer.slice(4);
  }
}
