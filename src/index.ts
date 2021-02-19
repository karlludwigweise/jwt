import * as jwt from "jsonwebtoken";

export function useJwt() {
  const decode = (token: string) => {
    return jwt.decode(token);
  };

  return {
    decode,
  };
}
