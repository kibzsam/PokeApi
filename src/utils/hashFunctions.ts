const bcrypt = require("bcrypt");
export const encrypt = (secret: string, value: number) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(secret, value, (error: any, hash: any) => {
      if (error) reject;
      resolve(hash);
    });
  });
