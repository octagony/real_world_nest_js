import { JwtPayload } from 'jsonwebtoken';

export interface IJWTVerify extends JwtPayload {
  id: number;
}
