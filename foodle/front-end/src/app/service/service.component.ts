import { Component, OnInit } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

//@Injectable()
export class ServiceComponent  { //

  private endpoint = 'http://www.foodle.cc/api/deals/';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };


  constructor(private http: HttpClient) {}

  private extractData(res: Response) { const body = res; return body || { }; }

  // ngOnInit() {}

  getDeals(): Observable<any> { return this.http.get(this.endpoint + 'deals').pipe( map(this.extractData)); }

  getDeal(id): Observable<any> {
    return this.http.get(this.endpoint + 'deals/' + id).pipe(
      map(this.extractData));
  }

  addDeal (deal): Observable<any> {
    console.log(deal);
    return this.http.post<any>(this.endpoint + 'deals', JSON.stringify(deal), this.httpOptions).pipe(
      tap((deal) => console.log(`added deal w/ id=${deal.info}`)),
      catchError(this.handleError<any>('addDeal'))
    );
  }

  updateDeal (id, deal): Observable<any> {
    return this.http.put(this.endpoint + 'deals/' + id, JSON.stringify(deal), this.httpOptions).pipe(
      tap(_ => console.log(`updated deal id=${id}`)),
      catchError(this.handleError<any>('updateDeal'))
    );
  }

  deleteDeal (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'deals/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted deal id=${id}`)),
      catchError(this.handleError<any>('deleteDeal'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





}
