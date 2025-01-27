import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.originalUrl);
    const {authorization} = req.headers;
    console.log(req.headers);
    
    if (!authorization) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
    if (authorization !== '123') {
      throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
    }
    next();
  }
}
