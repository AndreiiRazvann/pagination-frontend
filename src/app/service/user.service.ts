import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../interface/page';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly serverUrl: string = 'http://localhost:8085';

  constructor(private http: HttpClient) { }

  // Make a call to the backend API to retrieve a page of users
  users$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> => 
    this.http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`);

  // Another version of the function using regular function syntax
  /*
  getUser(name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> {
    return this.http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`);
  }
  */
}
