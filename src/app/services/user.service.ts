import { Injectable } from '@angular/core';

import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<IUser[]>(apiUrl);
  }
}
