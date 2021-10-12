import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './result';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Gateway {

    //private url = environment.apiBaseUrl;
    private url = 'environment.dommerApiBaseUrl';

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    public post<T>(path: string, payload?: any, headers?: HttpHeaders, params?: HttpParams, ignoreError?: boolean, throwError?: boolean): Observable<Result<T>> {
        return this.handleResponse(this.http.post<T>(this.url + path, payload, { headers, params }), ignoreError, throwError);
    }

    public get<T>(path: string, headers?: HttpHeaders, params?: HttpParams, ignoreError?: boolean, throwError?: boolean): Observable<Result<T>> {
        return this.handleResponse(this.http.get<T>(this.url + path, { headers, params }), ignoreError, throwError);
    }

    public put<T>(path: string, payload?: any, headers?: HttpHeaders, params?: HttpParams, ignoreError?: boolean, throwError?: boolean): Observable<Result<T>> {
        return this.handleResponse(this.http.put<T>(this.url + path, payload, { headers, params }), ignoreError, throwError);
    }

    public delete<T>(path: string, headers?: HttpHeaders, ignoreError?: boolean, throwError?: boolean): Observable<Result<T>> {
        return this.handleResponse(this.http.delete<T>(this.url + path, { headers }), ignoreError, throwError);
    }

    private handleResponse<T>(result: Observable<T>, ignoreError?: boolean, throwError?: boolean): Observable<Result<T>> {

        return result.pipe(
           map(res => new Result(res, null)),
           catchError(response => {
            if (response.status && response.status == 200)
            {
                return of(new Result(null, null));
            }
            else
            {
               return of(new Result(null, response.error));
            }
           })
        );
    }
}
