import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '3eb4ea7d74msh3491a8f429706b2p121507jsn44e7c5493a60',
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      }
    });
    return next.handle(req);
  }
}
