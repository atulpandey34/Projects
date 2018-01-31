import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticatedHttpService extends Http {
    public router: Router;
    headers: Headers = new Headers();
    //options: RequestOptions;
    constructor(backend: XHRBackend, defaultOptions: RequestOptions, router: Router) {
        super(backend, defaultOptions);
        this.router = router;
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);

    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (options == undefined || options == null)
            options = new RequestOptions({ headers: this.headers });
        else if (options.headers == null)
            options.headers = this.headers;
        else
            options.headers.append('authorization', sessionStorage["apiAuthToken"]);
        if ((url as any).headers != undefined) {
            (url as Request).headers.append('authorization', sessionStorage["apiAuthToken"]);
        }
        document.getElementById('preloader').classList.remove('hide');
        return super.request(url, options).catch((error: Response) => {
            if ((error.status === 401 || error.status === 403)) {
                sessionStorage.removeItem("apiAuthToken");
                this.router.navigate(['login']);
                //console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
                //window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable.throw(error);
        }).finally(() => {
            document.getElementById('preloader').classList.add('hide');
        });
    }
}