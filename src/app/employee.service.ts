import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private empServiceURL = '/api/persons';
  private empURL = '/api/person';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.empServiceURL)
      .pipe(
        tap(_ => this.log('fectched data')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );

  }

  searchEmployees(search: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empServiceURL + '/search/' +  search)
    .pipe(
      tap(_ => this.log('fectched data')),
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );

}
getEmployee(id: number): Observable<Employee> {
  return this.http.get<Employee>(this.empURL + '/id/' +  id)
  .pipe(
    tap(_ => this.log('fectched data')),
    catchError(this.handleError<Employee>('getEmployee', []))
  );

}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
