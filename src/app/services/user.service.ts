import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    console.log('Buscando usuários da API:', this.api);
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
