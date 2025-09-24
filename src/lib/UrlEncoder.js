import { Token } from "./url_encoder/token";

export class UrlEncoder {
  static encode(grid) {
    const token = new Token(grid);
    return token.build();
  }

  static decode(grid) {
    return "tokenDecode";
  }
}
