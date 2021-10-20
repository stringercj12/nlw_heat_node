declare namespace Express {
  export interface Request extends Request {
    user_id: string;
  }
}