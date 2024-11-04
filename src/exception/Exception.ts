import { HttpException, HttpStatus } from '@nestjs/common';

class Exception extends HttpException {
  constructor(code: number, message?: string) {
    super(
      {
        code,
        message: message || 'unknown error',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export { Exception };
