import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function baseUrlInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	const baseUrl = "http://localhost:8080/api"
    const apiReq = req.clone({
        url: `${baseUrl}/${req.url}`,
        withCredentials: true
    });

    return next(apiReq);
}
