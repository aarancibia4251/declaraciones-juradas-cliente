import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  RETRIES = 3;
  TIMEOUT = 10;
  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, params: HttpParams, headers: HttpHeaders, mapper): Observable<any> {
    return this.httpClient.get(url, {
      params,
      headers,
    })
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.catchError),
        map(mapper),
      );
  }

  post(url: string, body: any, mapper, params: HttpParams, headers: HttpHeaders): Observable<any> {
    return this.httpClient.post(url, body, {
      headers,
      params
    })
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.catchError),
        map(mapper),
      );
  }

  put(url: string, body: any, mapper, params: HttpParams, headers: HttpHeaders): Observable<any> {
    return this.httpClient.put(url, body, {
      params,
      headers,
    })
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.catchError),
        map(mapper),
      );
  }

  delete(url: string, params: HttpParams, headers: HttpHeaders): Observable<any> {
    return this.httpClient.delete(url, {
      params, headers
    })
      .pipe(
        timeout(this.TIMEOUT),
        retry(this.RETRIES),
        catchError(this.catchError),
        map(() => {
          return true;
        }),
      );
  }

  catchError() {
    const error = new Error();
    return throwError(error);
  }
}
