import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { filter, map, Observable } from 'rxjs';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  private apiLink = environment.baseURL;

  constructor(private http: HttpClient) {}


  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiLink, {
        observe: 'body',
      })
      .pipe(map((res: any) => res.data));
  }
  getById(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.apiLink}/${id}`, {
        observe: 'body',
      })
      .pipe(
        map((res: any) => res.data),
        filter((user) => user.id === id)
      );
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.apiLink, user, {
      observe: 'body',
    });
  }
  update(user: User):  Observable<User>  {
    return this.http.put<User>(`${this.apiLink}/${user.id}`, user,{
      observe: 'body',
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`);
  }

  getUsers(): User[] {
    return this.users;
  }

}
