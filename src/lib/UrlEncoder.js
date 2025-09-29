import { Decoder } from "./url_encoder/Decoder";
import { Token } from "./url_encoder/token";

export class UrlEncoder {
  static encode(grid) {
    const token = new Token(grid, 32);
    const url = `localhost:5173?g=${token.build()}`;

    return url;
  }

  static decode(token) {
    const decoder = new Decoder(token);

    return decoder.decode();
  }
}
