import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        if (response.code) {
          const { code, data, message, success } = response;
          return {
            data,
            code,
            message,
            success,
          };
        } else {
          const { data, message } = response;
          return {
            data,
            code: 0,
            message: message || null,
            success: true,
          };
        }
      }),
    );
  }
}
