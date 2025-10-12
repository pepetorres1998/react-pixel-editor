import { Decoder } from "./url_encoder/Decoder";
import { Token } from "./url_encoder/token";

export class UrlEncoder {
  static encode(grid) {
    console.log('Encoding');
    const token = new Token(grid, 32);
    const url = new URL(window.location.pathname, window.location.origin);

    url.search = "";
    url.searchParams.set("g", token.build());

    return url.toString();
  }

  static decode(token) {
    console.log('Decoding');
    const decoder = new Decoder(token);

    return decoder.decode();
  }
}
