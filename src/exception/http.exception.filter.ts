import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { Exception } from './Exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.json({
      code: exception.getResponse()['code'],
      message: exception.getResponse()['message'],
      data: null,
      success: false,
    });
  }
}
