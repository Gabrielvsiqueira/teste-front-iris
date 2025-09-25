import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'https://api.npoint.io/407eb45441779db1d10d';

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  create(user: User): Observable<User> {
    const { id, ...userWithoutId } = user;
    return this.http.post<User>(this.api, userWithoutId);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.api}/${user.id}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
