import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {TokenStorage} from "../../token.storage";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorage, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())
        });

        return next.handle(request);

    }

}
