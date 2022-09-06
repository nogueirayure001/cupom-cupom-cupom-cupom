import jwt from 'jsonwebtoken';

import { User } from '../schemas/users.schema.d';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

type SignType = Promise<string | Error | null | undefined>;
type VerifyType = Promise<string | jwt.JwtPayload | jwt.VerifyErrors | undefined | null>;

function sign(payload: object, secret: string, options: object): SignType {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (err, encoded) => {
      if (err) reject(err);

      resolve(encoded);
    })
  })
}

function verify(token: string, secret: string): VerifyType {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err);

      resolve(decoded);
    })
  })
}

async function createToken(user: User) {
  const { _id, isMaster } = user;
  const payload: User = { _id, isMaster };

  return await sign(payload, JWT_PRIVATE_KEY, {
    expiresIn: '1d'
  });
}

async function verifyToken(token: string) {
  return await verify(token, JWT_PRIVATE_KEY);
}

export { createToken, verifyToken };
