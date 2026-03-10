import jwt, {
  type JwtPayload,
  type Secret,
  type SignOptions,
} from 'jsonwebtoken';

//* Creating Token
export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: Secret,
  expiresIn: number | string,
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as number | NonNullable<SignOptions['expiresIn']>,
  };
  return jwt.sign(jwtPayload, secret, options);
};

//* Verifying token
export const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};
